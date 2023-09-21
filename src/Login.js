import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import './Login.css';
let Login=(props)=>{
    let [data,setData]=useState({})
    let [err,setErr]=useState()
    let navigate=useNavigate()
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let login=()=>{
        axios.post("http://localhost:5000/login",data).then(
            (res)=>{
                if(res.data.token!==undefined)
                {
                    setErr("error in login")
                    

                }
                else{
                    props.updtoken(res.data.token)
                    navigate("/")

                }

            }
        )
    }
   
    return(
        <div className='mainpage' >
<section className='part'>
    <h1>Login here</h1>
<div style={{"color":"red"}}>{err}</div>
            <input type="text" placeholder='enter email' name="_id" onChange={fun}/>
            <input type="password" placeholder='enter email' name="password" onChange={fun}/>
            <button onClick={login}>Login</button>
       
</section>
        </div>

    )

}
export default Login