import React, { useState } from 'react';
import axios from 'axios';
import REG from './images/reg.jpg';
import './reg.css';
import config from '../config';

const Register = () => {
 

  const handleRegister = async () => {

    try {
      const response = await axios.post(`${config.url}/insert`, {
        name:  document.getElementById("idun").value,
        email:  document.getElementById("idemail").value,
        password: document.getElementById("idpw").value,
        password2: document.getElementById("idconfirm").value,
      });

      console.log(response.data);
      if(response.data == "received data"){
      alert("Successfull Registered  Login!")
      }
      else{
        alert("failed to register")

      }

    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <div className="fullscreen-video">  
        <div className='ph'>
          <img src={REG} alt="Registration Image" />
        </div>
        <div className='main'>
          <div id="lp" className="login-page1">
            <b><h3>REGISTER</h3></b>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: "12vw",
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
                    width: "12vw",
                    borderRadius: '40px',
                  }}
                  type="email"
                  id="idemail"
                  placeholder="  Enter Email"
                
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: "12vw",
                    borderRadius: '40px',
                  }}
                  type="password"
                  id="idpw"
                  name="pw"
                  placeholder="  Enter Password"
                 
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: "12vw",
                    borderRadius: '40px',
                  }}
                  type="password"
                  id="idconfirm"
                  name="confirm"
                  placeholder="  Confirm Password"
                 
                />
              </div>
            </div>

            <button
              id='but'
              onClick={handleRegister}
              style={{
                borderRadius: "10px",
                color: "black",
                borderColor: "transparent",
                height: "4vh",
                width: "13vw",
                backgroundColor: "lightblue",
              }}
            >
              Register
            </button>
            <br />
            <br />
            <h4 style={{ height: "5vh" }}>Have an account?<a href='/log'> Login</a></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
