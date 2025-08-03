import React from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
function Home(){
  const navigate=useNavigate();
  return (
    <div>
      <center className='c1'>
        <h1>Welcome To Book My Chef</h1>
        <button onClick={()=>navigate("/register")}>Register</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={()=>navigate("/login")}>Login</button>
      </center>
    </div>
  )
}
export default Home






