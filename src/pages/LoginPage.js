import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.scss'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    fetch('https://fakestoreapi.com/auth/login',{
      method:'POST',
      body:JSON.stringify({
        username: "mor_2314",
        password: "83r5^_"
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => console.log(json));
    
    //thực hiện kiểm tra đăng nhập
    if(username === true && password === true){
      console.log("thành công !")
    }else{
      console.log("thất bại!")
    }
  };

  return (
    <div className="login-container col-4">
  <div className='title'>Sign in</div>
  <input
    type='text'
    placeholder='Email or username'
    value={username}
    onChange={handleUsernameChange}
  />
  <input
    type='password'
    placeholder='Password'
    value={password}
    onChange={handlePasswordChange}
  />
  <Link to={`/`} onClick={handleSubmit}>
    <button >Login</button>
  </Link>
  <div className="go-back">Go back</div>
</div>

  );
};

export default Login;
