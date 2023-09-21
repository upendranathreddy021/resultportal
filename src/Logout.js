import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

let Logout=(props)=>{
    let navigate=useNavigate()
    useEffect(()=>{
        props.updtoken("")
        navigate("/")
    },[])
    return(<></>)

    

}
export default Logout