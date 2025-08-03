import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const { username, password } = loginData;
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios.get('https://signupform-23e5b-default-rtdb.firebaseio.com/register.json')
      .then(response => {
        const usersArray = Object.values(response.data).map(user => ({ username: user.username, password: user.password }));
        setUsers(usersArray);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser) {
      alert("Login successful!");
      navigate('/bmchome');
    } else {
      alert("Invalid username or password");
    }

  };

  return (
    <div>
        <center>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={username} placeholder="Username" onChange={handleChange} />
        <br />
        <input type="password" name="password" value={password} placeholder="Password" onChange={handleChange} />
        <br /><br/>
        <button type="submit">Login</button><br/>
        <h2>DON'T HAVE AN ACCOUNT?</h2>
          <Link to={'/register'}><button>REGISTER</button></Link>

      </form>
      </center>
    </div>
  );
};

export default Login;
