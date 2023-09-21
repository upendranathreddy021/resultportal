let admin=require("../model/Admin")
let result=require("../model/result")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")

let reg=async (req,res)=>{
    let data=req.body
    let hash=await bcrypt.hash(req.body.password,10)
    data={...data,"password":hash}
    let admindata=new admin(data)
    admindata.save().then(()=>{
        res.send("reg done")
    })
}

let login=async (req,res)=>{
    let data=await admin.findById({"_id":req.body._id})

    if(data){
        let f= await bcrypt.compare(req.body.password,data.password)
        if(f){
            let token=jwt.sign({"_id":req.body._id},"abcd")
            res.send(token)
        }
        else{
            res.send("check password")
        }

    }
    else{
        res.send("check mail")
    }
}
let addres=(req,res)=>{
    let resdata=new result(req.body)
    resdata.save().then(()=>{
        res.send('stored').catch((err)=>{
            console.log(err)
        })
    }).catch((err)=>{
        console.log(err)
    })
}

let getres= async(req,res)=>{
    let resdata= await result.findById({"_id":req.params.id})
if(resdata){
    res.json(resdata)

}
else{
    res.send("check id")
}

}

let islogin= (req,res,next)=>{
    try{
    jwt.verify(req.headers.authorization,"abcd")
    
    next()
    }
    catch(err){
        res.send("please login to add")
    }
}
module.exports={reg,login,addres,getres,islogin}