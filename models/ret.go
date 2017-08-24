package models

type Ret struct {
	Code    int         `json:"code"`
	Message string      `json:"message"`
	Data    interface{} `json:"data";required:"false"`
}

func NewDefaultRet() Ret {
	return Ret{0, "", ""}
}

func NewRet(code int, message string, data interface{}) Ret {
	return Ret{code, message, data}
}
