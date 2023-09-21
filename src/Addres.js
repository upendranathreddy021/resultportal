import axios from "axios"
import './Addres.css'
import { useState } from "react"

let Addres=(props)=>{
let [data,setData]=useState({"_id":"","name":"","dob":"","sub1":"",
"sub2":"","sub3":"","sub4":""})
    let [msg,setMsg]=useState()
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let store=()=>{
        axios.post("http://localhost:5000/addres",data,
        {"headers":{"authorization":props.token}}).then((res)=>{
        setMsg(res.data)
        setData({"_id":"","name":"","dob":"","sub1":"",
        "sub2":"","sub3":"","sub4":""})
        })
    }
    return(
        <div className="main">
            <div>{msg}</div>
            <input type="text" name="_id" placeholder="enter hall ticket no" onChange={fun} value={data._id}/>
            <input type="text" name="name" placeholder="Name" onChange={fun} value={data.name}/>
            <input type="date" name="dob"  placeholder="date of birth"  onChange={fun} value={data.dob}/>
            <input type="text" name="sub1"  placeholder="subject 1"  onChange={fun} value={data.sub1}/>
            <input type="text" name="sub2" placeholder="subject 2" onChange={fun} value={data.sub2}/>
            <input type="text" name="sub3" placeholder="subject 3" onChange={fun} value={data.sub3}/>
            <input type="text" name="sub4" placeholder="subject 4"  onChange={fun} value={data.sub4}/>
            <button onClick={store}>SUBMIT</button>
        </div>
    )

}
export default Addres