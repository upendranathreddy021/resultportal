let express=require('express')
const {login,reg,addres,getres,islogin}=require('../controlers/rescont')
let route=new express.Router()
route.post("/login",login)
route.post("/reg",reg)
route.post("/addres",addres)
route.get("/getres/:id",getres)
module.exports=route