import React from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate('/register');
  };
  const handleClick2 = () => {
    navigate('/bmchome');
  };

  return (
    <center>
    <div>
        <h1>login</h1>
        <button onClick={handleClick1}>Register</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={handleClick2}>Bmchome</button>
    </div>
    </center>
  );
}

export default Login;
