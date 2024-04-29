import React, { useState } from 'react';
import REG from './images/reg.jpg';
import './reg.css';
import config from '../config';

const Chpa = () => {
  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = async () => {
    try {
      const response = await fetch(`${config.url}/updatepassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ un: username, pw: currentPassword, newPw: newPassword }),
      });
  
      if (!response.ok) {
        alert("ERROR!!");
        throw new Error(`Failed to update password. Status: ${response.status}`);
      }
      else{
  
      const data = await response.json();
      alert("Updated successfully");
  
      console.log(data);  // Log the response from the server
      }
      
    //   history.push('/log');
    } catch (error) {
      // Handle error, e.g., display an error message to the user
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
            <b><h3></h3></b>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: '12vw',
                    borderRadius: '40px',
                  }}
                  type="text"
                  id="idun"
                  placeholder="  Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: '12vw',
                    borderRadius: '40px',
                  }}
                  type="password"
                  id="idpw"
                  name="pw"
                  placeholder="  Enter Current Password"
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: '12vw',
                    borderRadius: '40px',
                  }}
                  type="password"
                  id="idconfirm"
                  name="confirm"
                  placeholder="  Enter New Password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              id='but'
              onClick={handleChangePassword}
              style={{
                borderRadius: '10px',
                color: 'black',
                borderColor: 'transparent',
                height: '4vh',
                width: '30vh',
                backgroundColor: 'lightblue',
              }}
            >
              Change password
            </button>
            <br />
            <br />
            <h4 style={{ height: '5vh' }}>Have an account?<a href='/log'> Login</a></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chpa;
