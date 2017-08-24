package admin

import (
	"libertyblog/models"
	"time"
)

type CommentController struct {
	baseController
}

// @Title Comment
// @Description 插入,更新,删除 评论
// 插入 curl -d "flag=1&article_id=76&to_user_id=1&content=test" "http://localhost/comment"
// 更新 curl -d "flag=2&content=test1&id=1" "http://localhost/comment"
// 删除 curl -d "flag=3&id=1" "http://localhost/comment"
// @Param	flag		form 	int64	true		"flag: 1 new, 2 update, 3 delete"
// @Param	article_id		form 	int64	true		"article id"
// @Success 200 {object} models.Ret response a json, Code=0 success
// @Failure 403 :flag is empty
// @router /comment [post]
func (this *CommentController) Comment() {
	ret := models.Ret{Code: 0, Message: "success", Data: ""}
	if this.Ctx.Input.IsPost() {
		flag, _ := this.GetInt("flag")
		var comment models.Comment
		switch flag {
		case 1: // 新增
			comment.User_id = this.userid
			comment.Article_id, _ = this.GetInt64("article_id")
			comment.Ref_comm_id, _ = this.GetInt64("ref_comm_id")
			comment.Content = this.GetString("content")
			comment.To_user_id, _ = this.GetInt64("to_user_id")
			comment.Dislike, _ = this.GetInt("dislike")
			comment.Like, _ = this.GetInt("like")
			comment.Create_time = time.Now()
			if err := comment.Insert(); nil != err {
				ret.Code = -9
				ret.Message = err.Error()
				goto end
			}
			break
		case 2: // 修改
			comment.Id, _ = this.GetInt64("id") // 评论id
			if err := comment.Read("id"); nil != err {
				ret.Code = -8
				ret.Message = err.Error()
				goto end
			}
			if comment.User_id != this.userid {
				ret.Code = -7
				ret.Message = "this is not your comment,you can not update!"
				goto end
			}
			comment.Content = this.GetString("content")
			comment.Create_time = time.Now()
			if err := comment.Update(); nil != err {
				ret.Code = -6
				ret.Message = err.Error()
				goto end
			}
			break
		case 3:
			comment.Id, _ = this.GetInt64("id") // 评论id
			if err := comment.Read("id"); nil != err {
				ret.Code = -5
				ret.Message = err.Error()
				goto end
			}
			if comment.User_id != this.userid {
				//this.Ctx.WriteString("{\"code\":-1,\"errorMessage\":\"this is not your comment,you can not delete!\"}")
				ret.Code = -4
				ret.Message = "this is not your comment,you can not delete!"
				goto end
			}
			if err := comment.Delete(); nil != err {
				ret.Code = -3
				ret.Message = err.Error()
				goto end
			}
			break
		default:
			ret.Code = -2
			ret.Message = "no this flag"
			goto end
		}
		ret.Code = 0
	} else {
		ret.Code = -1
		ret.Message = "must be POST"
	}

end:
	//this.Data["json"] = map[string]interface{}{"status": 200, "message": "login success ", "moreinfo": "aaa"}
	this.Data["json"] = ret
	this.ServeJSON()
}
