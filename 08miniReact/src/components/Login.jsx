import React,{useState,useContext} from "react";
import UserContext from "../context/userContext";

function Login() {

    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({userName, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} placeholder="userName"/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password"/>
        <button onClick={handleSubmit} >Login</button>
    </div>
  )
}

export default Login