package models

type Ret struct {
	Code    int
	Message string
	Data    interface{}
}

func NewDefaultRet() Ret {
	return Ret{0, "", ""}
}

func NewRet(code int, message string, data interface{}) Ret {
	return Ret{code, message, data}
}
