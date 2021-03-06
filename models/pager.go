package models

import (
	"bytes"
	"fmt"
	"math"
)

type Pager struct {
	Page     int64
	Totalnum int64
	Pagesize int64
	urlpath  string
}

func NewPager(page, totalnum, pagesize int64, urlpath string) *Pager {
	p := new(Pager)
	p.Page = page
	p.Totalnum = totalnum
	p.Pagesize = pagesize
	p.urlpath = urlpath
	return p
}

func (this *Pager) url(page int64) string {
	return fmt.Sprintf(this.urlpath, page)
}

func (this *Pager) ToString() string {
	if this.Totalnum <= this.Pagesize {
		return ""
	}

	var buf bytes.Buffer
	var from, to, linknum, offset, totalpage int64

	offset = 5
	linknum = 10

	totalpage = int64(math.Ceil(float64(this.Totalnum) / float64(this.Pagesize)))

	if totalpage < linknum {
		from = 1
		to = totalpage
	} else {
		from = this.Page - offset
		to = from + linknum
		if from < 1 {
			from = 1
			to = from + linknum - 1
		} else if to > totalpage {
			to = totalpage
			from = totalpage - linknum + 1
		}
	}

	buf.WriteString("<div class=\"page\"><form id=\"next_page\">")
	if this.Page > 1 {
		buf.WriteString(fmt.Sprintf("&nbsp<a href=\"%s\">&laquo;</a>", this.url(this.Page-1)))
	} else {
		buf.WriteString("&nbsp<b>&laquo;</b>")
	}

	if this.Page > linknum {
		buf.WriteString(fmt.Sprintf("&nbsp<a href=\"%s\">1</a>", this.url(1)))
	}

	for i := from; i <= to; i++ {
		if i == this.Page {
			buf.WriteString(fmt.Sprintf("&nbsp<b>%d</b>", i))
		} else {
			buf.WriteString(fmt.Sprintf("&nbsp<a href=\"%s\">%d</a>", this.url(i), i))
		}
	}

	if totalpage > to {
		buf.WriteString(fmt.Sprintf("&nbsp;<a href=\"%s\">%d</a>", this.url(totalpage), totalpage))
	}

	buf.WriteString(fmt.Sprintf("&nbsp;<input name=\"go_page\" placeholder=\"Go\" size=\"2em\" />"))

	if this.Page < totalpage {
		buf.WriteString(fmt.Sprintf("&nbsp<a href=\"%s\">&raquo;</a>", this.url(this.Page+1)))
	} else {
		buf.WriteString(fmt.Sprintf("&nbsp<b>&raquo;</b>"))
	}
	buf.WriteString("</form></div>")

	return buf.String()
}

func (this *Pager) ToString1() string {
	if this.Totalnum <= this.Pagesize {
		return ""
	}

	var buf bytes.Buffer
	var from, to, linknum, offset, totalpage int64

	offset = 5
	linknum = 10

	totalpage = int64(math.Ceil(float64(this.Totalnum) / float64(this.Pagesize)))

	if totalpage < linknum {
		from = 1
		to = totalpage
	} else {
		from = this.Page - offset
		to = from + linknum
		if from < 1 {
			from = 1
			to = from + linknum - 1
		} else if to > totalpage {
			to = totalpage
			from = totalpage - linknum + 1
		}
	}

	buf.WriteString("<nav aria-label=\"Page navigation\"><form id=\"next_page\"><ul class=\"pagination pagination-lg\">")
	if this.Page > 1 {
		buf.WriteString(fmt.Sprintf("<li><a href=\"%s\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li>", this.url(this.Page-1)))
	} else {
		buf.WriteString("<li class=\"disabled\"><a aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li>")
	}

	if this.Page > linknum {
		buf.WriteString(fmt.Sprintf("<li><a href=\"%s\">1</a></li>", this.url(1)))
	}

	for i := from; i <= to; i++ {
		if i == this.Page {
			buf.WriteString(fmt.Sprintf("<li class=\"active\"><a>%d <span class=\"sr-only\">(current)</span></a></li>", i))
		} else {
			buf.WriteString(fmt.Sprintf("<li><a href=\"%s\">%d</a></li>", this.url(i), i))
		}
	}

	if totalpage > to {
		buf.WriteString(fmt.Sprintf("<li><a href=\"%s\">%d</a></li>", this.url(totalpage), totalpage))
	}

	buf.WriteString(fmt.Sprintf("<li><a><input class=\"form-control\" name=\"go_page\" placeholder=\"Go\" size=\"2em\" /></a></li>"))

	if this.Page < totalpage {
		buf.WriteString(fmt.Sprintf("<li><a href=\"%s\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a></li>", this.url(this.Page+1)))
	} else {
		buf.WriteString(fmt.Sprintf("<li class=\"disabled\"><a aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a></li>"))
	}
	buf.WriteString("</form></ul></nav>")

	return buf.String()
}
