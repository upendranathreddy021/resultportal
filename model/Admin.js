let mongoose=require('mongoose')
let AdmSchema=new mongoose.Schema({
    "_id":String,
    "password":String
})
module.exports=mongoose.model("admin",AdmSchema);