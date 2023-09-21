import axios from "axios"
import { useState } from "react"

let Home=()=>{
    let [hno,setHno]=useState()
    let [err,setErr]=useState("")
    let [data,setData]=useState({})
    let fun=(e)=>{
        setHno(e.target.value)
    }
    let result=()=>{
        axios.get(`http://localhost:5000/getres/${hno}`).then((res)=>{
            if(res.data=="check id")
            {
                setErr(res.data)
                setData({})
            }
            else{
                setData(res.data)
                setErr("")
                
            }
        })
    }


    return(
        <div>
            {err!=""&&<div>{err}</div>}
            <div>

                <input type="text" name="hno" onChange={fun}/>
                <button onClick={result}>Getres</button>
            </div>
          {Object.keys(data).length!=0&&<div>
            <h1>HNO:{data._id}</h1>
            <h1>NAME:{data.name}</h1>
            <h2>DOB {new Date(data.dob).toLocaleDateString()}</h2>
            <p>Sub1:{data.sub1}</p>
            <p>Sub2:{data.sub2}</p>
            <p>Sub3:{data.sub3}</p>
            <p>Sub4:{data.sub4}</p>
            <h1>Total:{data.sub1+data.sub2+data.sub3+data.sub4}</h1>
            </div>}


        </div>
    )


}
export default Home