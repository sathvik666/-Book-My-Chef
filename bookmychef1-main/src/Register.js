import React,{useState} from 'react'
import { Link } from 'react-router-dom';
function Register()  {
    const [user , setUser] = useState({
        name:"",email:"",password:""
    });
    const {name}=user;
    const handleInputs=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=e=>{
        e.preventDefault();
        localStorage.setItem("name",user.name)
        console.log(user)
    }
  return (
    <div>
        <center>
        <h1>register</h1>
        <Link to={'/login'}><button>Login</button></Link>
        <form onSubmit={handleSubmit}>
            <h3>REGISTRATION</h3>
            <p>NAME<span>*</span></p>
            <input type='text' name='name' placeholder='Enter your name' className='box' maxLength='50' autoComplete='off'
                 value={name}
                 onChange={handleInputs}
            />
            <p>EMAIL<span>*</span></p>
            <input type='email' name='email' placeholder='Enter your email' className='box' maxLength='50'/>
            <p>PASSWORD<span>*</span></p>
            <input type='password' name='password' placeholder='Enter your Password' className='box' maxLength='50'/>
            <button type='submit' name='submit' className='btn'>REGISTER</button>
            <br/><br/>
            <p>ALREADY HAVE AN ACCOUNT</p>
            
        </form>
        </center>
    </div>
  )
}

export default Register;