import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const navigate=useNavigate();
  const {name}=useParams();
  return (
    <div>
        <center>
          <h1>Dashboard Page</h1>
          <br/>
          <p>Name:{name}</p>
          <button onClick={()=>{navigate('/')}}>Back To Home</button>
        </center>
    </div>
  )
}
export default Dashboard
