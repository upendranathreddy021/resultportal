import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Nav from "./Nav"
import Addres from "./Addres"
import Logout from "./Logout"
import { useState } from "react"


let App=()=>{
  let [token,setToken]=useState("")
  let tokenupd=(token)=>{
    setToken(token)
  }


  return(
    <BrowserRouter>
    <Nav token={token}/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login updtoken={tokenupd}/>}/>
      <Route path="/add" element={<Addres token={token}/>}/>
      <Route path="/logout" element={<Logout updtoken={tokenupd}/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App