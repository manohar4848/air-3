import React, { useState, useEffect } from 'react';
import './home.css';
import Logo from './images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import config from '../config';


const Airinfo = () => {
    var username=localStorage.getItem("un")
    const [r,setR]=useState(null)
    //state full component rerenders 2 times when ever data is changed
    //will wait till it gets data
    if(r==null){
     axios.get(`${config.url}/show`,{
       
     }).then((res)=>{
         console.log(res.data)
         setR(res.data)
         //data bcz dictionary
     })  
   }

    function deletefun() {
        localStorage.removeItem('a', 'null');
    }
    

    function handleUpdateS() {
        console.log("Updating flight with ID:", document.getElementById("uid").value);
        console.log("Updated departure time:", document.getElementById("utime").value);
    
        axios.put(`${config.url}/update`, {
            utime: document.getElementById("utime").value,
            uid: document.getElementById("uid").value,
        }).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.error('Error:', error);
        });
    }
    
    if(r!=null){
    return (
        <div className='body'>
            <div style={{ backgroundColor: "black", backgroundSize: "100vh" }}>
                <div className='header'>
                    <img style={{ width: "18vw", cursor: "pointer ", height: "10vh" }} src={Logo} alt='Logo' />

                    <div className="menu-links">
                        <div class="navbar">
                            <div class="dropdown">
                                <button style={{ backgroundColor: "black", paddingRight: "10px", fontSize: "1vw" }} className="dropbtn">PROFILE
                                </button>
                                <div style={{ backgroundColor: "black" }} class="dropdown-content">
                                    <a style={{ color: "white", fontSize: "1vw" }} href="#">User info</a>
                                    <a style={{ color: "white", fontSize: "1vw" }} href="/orderf">check orders</a>
                                    <a style={{ color: "white", fontSize: "1vw" }} href="/chpa">change password</a>
                                    <a style={{ color: "white", fontSize: "1vw" }} href="/admin">Add Airline</a>

                                    <a onClick={deletefun} style={{ color: "white", fontSize: "1vw" }} href="/">Logout</a>

                                </div>
                            </div>
                        </div>

                        <FontAwesomeIcon style={{ color: "white", paddingRight: "4vw", paddingTop: "20px", height: "1.3vh" }} icon={faArrowRight} />
                    </div>
                </div>
                <div className='header1'>

                <div style={{display:"flex",justifyContent:"space-between",paddingTop:"10vh"}} className="menu-links">
                        <div className='left'>
                            <h4 style={{ color: "white", paddingLeft: "2vw",fontSize:"1vw" }}>Admin page</h4>
                        </div>
                        <h4 style={{ color: "#ffffff", paddingRight: "5vw", fontSize: "1vw", fontFamily: "monospace" }}>Welcome, <span style={{ color: "rgb(251, 87, 28)" }}>{username}</span></h4>
                    </div>
                </div>
                <div style={{ marginTop: "3vh", color: "black", width: "100%", height: "9vh", position: "relative" }} className='header1'>
                    <img style={{ width: "100%", height: "9vh" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpaWlQcSrC9WwW8bm593kYxfHt1X77LKwHzA&usqp=CAU' alt='image' />
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                        <h3 style={{ fontFamily: "monospace", fontSize: "25px",fontSize:"1.5vw" }}>Airline Details & Update</h3>
                    </div>
                </div>
                <div style={{width:"90vw",marginLeft:"5vw",marginTop:"3vh"}}>
                <table style={{ color: "blue", border: "1px solid white", width: "100%", borderCollapse: "collapse" }}>
    <thead style={{ backgroundColor: "black", color: "white" }}>
        <tr>
            <th style={{ border: "1px solid white", padding: "8px",color:"rgb(251, 87, 28)" ,fontSize:"1.5vw" }}>ID</th>
            <th style={{ border: "1px solid white", padding: "8px",color:"rgb(251, 87, 28)",fontSize:"1.5vw"  }}>Departure City</th>
            <th style={{ border: "1px solid white", padding: "8px",color:"rgb(251, 87, 28)",fontSize:"1.5vw"  }}>Arrival City</th>
            <th style={{ border: "1px solid white", padding: "8px",color:"rgb(251, 87, 28)",fontSize:"1.5vw"  }}>Departure Date</th>
            <th style={{ border: "1px solid white", padding: "8px",color:"rgb(251, 87, 28)",fontSize:"1.5vw"  }}>Airline Name</th>
            <th style={{ border: "1px solid white", padding: "8px",color:"rgb(251, 87, 28)",fontSize:"1.5vw"  }}>Airline Time</th>


        </tr>
    </thead>
    <tbody>
    {r.map((user) => (
            <tr key={user._id}>
                <td style={{ border: "1px solid white", padding: "8px",color:"white",fontSize:"1vw" }}>{user.num}</td>
                <td style={{ border: "1px solid white", padding: "8px",color:"white",fontSize:"1vw"  }}>{user.desname}</td>
                <td style={{ border: "1px solid white", padding: "8px",color:"white",fontSize:"1vw"  }}>{user.ariname}</td>
                <td style={{ border: "1px solid white", padding: "8px",color:"white",fontSize:"1vw"  }}>{user.date}</td>
                <td style={{ border: "1px solid white", padding: "8px",color:"white",fontSize:"1vw"  }}>{user.airline}</td>
                <td style={{ border: "1px solid white", padding: "8px",color:"white",fontSize:"1vw"  }}>{user.time}</td>

            </tr>
        ))}
    </tbody>
</table>
</div>

<div style={{width:"95vw",height:"20vh",display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"7vh"}}>
        <div >
        <h4 style={{color:" rgb(251, 87, 28)",fontSize:"1.5vw"}}>Enter Flight Id</h4>
            <input type='text' id='uid'placeholder='Enter ID '></input>
<h4 style={{color:" rgb(251, 87, 28)",fontSize:"1.5vw"}}>Update Departure time</h4>
            <input type='text' id='utime'placeholder='Enter Updated time'  ></input>
            </div>
            </div>
            <div style={{width:"95vw",height:"20vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <button onClick={handleUpdateS} style={{backgroundColor:"transparent",color:"white",cursor:"pointer",backgroundColor:"rgb(251, 87, 28)",fontSize:"1vw"}}>Update</button>
    </div>
<div style={{height:"30vh",width:"100vw",marginTop:"25vh"}} className='fotter'>
    <footer class="footer-distributed">
              <div class="footer-left">
                  <h3 style={{fontSize:"2vw"}}>KC<span>AIRLINES</span></h3>
                  <p class="footer-links">
                      <a style={{fontSize:"1vw"}} href="#" class="link-1">Home</a>		
                      <a style={{fontSize:"1vw"}} href="#">Pricing</a>
                      <a style={{fontSize:"1vw"}} href="#">About</a>
                      <a style={{fontSize:"1vw"}} href="#">Faq</a>				
                      <a style={{fontSize:"1vw"}} href="#">Contact</a>
                  </p>
    
              
              </div>
    
              <div class="footer-center">
    
                  <div>
                      <i class="fa fa-map-marker"></i>
                      <p style={{fontSize:"1vw"}}><span>pincode</span> Vijayawda,KLU</p>
                  </div>
    
                  <div>
                      <i class="fa fa-phone"></i>
                      <p style={{fontSize:"1vw"}}>8811002200</p>
                  </div>
    
                  <div>
                      <i class="fa fa-envelope"></i>
                      <p style={{fontSize:"1vw"}}><a href="mailto:support@company.com">Kcairline@company.com</a></p>
                  </div>
    
              </div>
    
              <div class="footer-right">
    
                  <p style={{fontSize:"0.8vw"}} class="footer-company-about">
                      <span>About the company</span>
                      Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                  </p>
    
                  <div class="footer-icons">
    
                      <a href="#"><i class="fa fa-facebook"><FontAwesomeIcon icon={faInstagram} />  </i></a>
            
                      <a href="#"><i class="fa fa-twitter"><FontAwesomeIcon icon={faFacebook} /></i></a>
                      <a href="#"><i class="fa fa-linkedin"><FontAwesomeIcon icon={faXTwitter} /></i></a>
                      <a href="#"><i class="fa fa-github"></i><FontAwesomeIcon icon={faGithub} /></a>
    
                  </div>
         
    
              </div>
        
    
          </footer>
     < div  style={{width:"100vw",height:"5vh",textAlign:"center",justifyContent:"center"}}className='copy'>
            <p style={{color:"black",fontSize:"1.3vw"}}>Copyrigths reserved &nbsp;&nbsp;&nbsp; <span>Kcairline@2024</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <button  style={{backgroundColor:"transparent",color:"white",cursor:"pointer",backgroundColor:"rgb(251, 87, 28)",fontSize:"1vw"}}>click <FontAwesomeIcon icon={faArrowUp} />  </button> </p>
           
          </div>
    
    </div>
      
    </div>  

            </div>

            
    );
}
else{
    return(
        <div>
          Data is fetching
        </div>
      )
    
}
}


export default Airinfo;
