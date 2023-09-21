let mongoose=require('mongoose')
let ResSch=new mongoose.Schema({
    "_id":Number,"name":String,"dob":Date,"sub1":Number,
    "sub2":Number,"sub3":Number,"sub4":Number
})
module.exports=mongoose.model("res",ResSch);