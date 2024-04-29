import React, { useState } from 'react';
import Air from './images/one.webm';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import config from '../config';




  const Login = () => {

    const navigate = useNavigate();


  const Handlesubmit = () => {
    axios.post(`${config.url}/check`, {
    un: document.getElementById("idun").value,
    pw: document.getElementsByName("pw")[0].value,
  }).then((res) => {
    console.log(res.data);
    if (res.data === "PASS") {
      localStorage.setItem("un",document.getElementById("idun").value)
      navigate('/home');
    }
    else if(res.data=="ADMIN"){
      localStorage.setItem("un",document.getElementById("idun").value)
      navigate('/admin');


    } else {
      alert("User not found. Register!");
    }
    });
  };
    
    return (
      <div >
      <div className="fullscreen-video">
        <div className='vid'>
          <video autoPlay muted loop id="background-video">
            <source src={Air} type="video/webm" />
          </video>
        </div>
        <div className='main'>
        <div id="lp"  className="login-page" >
              <h2 style={{paddingRight:"170px"}}>Hello!</h2>
              <b><h3>LOGIN</h3></b> 
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        style={{
          backgroundColor: 'transparent',
          height: '4vh',
          width:"12vw",
          borderRadius: '40px',
        }}
        type="text"
        id="idun"
        placeholder="  Enter Username"
      />
    </div>

    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        style={{
          backgroundColor: 'transparent',
          height: '4vh',
          width:"12vw",
          borderRadius: '40px',
        }}
        type="password"
        id="idpw"
        name="pw"
        placeholder="  Enter Password"
      />
    </div>
  </div>


              <button  id='but'  onClick={Handlesubmit}  style={{borderRadius:"10px",color:"black",borderColor:"transparent",height:"4vh",width:"30vh",backgroundColor:"lightblue",}}>
                  Login
              </button>
              <br/>
              <br/>
              <p style={{height:"5vh"}}>Dont have an account?<a href='/reg'> Register</a></p>
              
              
          </div>
          </div>
      </div>
      </div>
    );
  };

export default Login;
