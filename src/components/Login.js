import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../imgs/Transparent Logo.png";


export default function Login() {
  return (
<>
<div className='login-bg'>
    <div className='login-l'>
        <Link to="/login"><button className='log-btn'>Log In</button></Link>
        <Link to="/signup"><button className='sign-btn'>Sign Up</button></Link>
    </div>
    <div className='login-r'>
     <img src={logo} />
      <input type='text' placeholder='Email Address'></input>
        <input type='text' placeholder='Password'></input>
     <button>Login</button>
     <div className='dwn-btn'>
        <div className='dwn-btn-l'></div>
        <span class="iconify" data-icon="icon-park:dot"></span>
        <div className='dwn-btn-r'></div>
     </div>
     <div className='login-via'>
        <button>Facebook</button>
        <button>Google+</button>
     </div>
    </div>
</div>
</>
    )
}
