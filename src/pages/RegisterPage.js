import React from 'react';
import { Link } from 'react-router-dom';

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
    
  };
const RegisterPage = () => {
    return (
        <div className="login-container col-4">
  <div className='title'>Sign in</div>
  <input
    type='text'
    placeholder='Email or username'
    
  />
  <input
    type='password'
    placeholder='Password'
    
  />
  <input
    type='password'
    placeholder=' Enter Password'
    
  />
  <Link to={`/home`} onClick={handleSubmit}>
    <button >Register</button>
  </Link>
  <Link to={`/login`} onClick={handleSubmit}>
    <a >Go Back Login</a>
  </Link>
</div>
    );
};

export default RegisterPage;