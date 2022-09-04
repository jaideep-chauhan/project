import React from 'react';
import logo from "../imgs/Transparent Logo.png";
import { Link } from 'react-router-dom';


export default function SignUp() {
  return (
<>
<div className='signup-bg'>
    <div className='signup-l'>
        <Link to="/login"><button className='log-btn'>Log In</button></Link>
        <Link to="/signup"><button className='sign-btn'>Sign Up</button></Link>
    </div>
    <div className='signup-r'>
     <img src={logo} />
      <input type='text' placeholder='Full Name'></input>
      <input type='number' placeholder='Phone Number'></input>
      <input type='text' placeholder='Email Address'></input>
        <input type='password' placeholder='New Password'></input>
        <input type='password' placeholder='Conform Password'></input>
     <button>Sign Up</button>
    
     
    </div>
</div>
</>
    )
}
