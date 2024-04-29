import React from 'react'
import './home.css';
import axios from 'axios';
import Logo from './images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import config from '../config';


const admin = () => {
    var a= localStorage.getItem("un")

    function handleSubmit(){
        axios.post(`${config.url}/admininsert`,{
        desname : document.getElementById('desname').value,
         ariname : document.getElementById('ariname').value,
         date : document.getElementById('date').value,
         airline : document.getElementById('airline').value,
         num: document.getElementById('num').value,
         time: document.getElementById('time').value

        }).then((res)=>{
            console.log(res.data);
            if(res.data == "received data"){
            alert("Successfull added flight!")
            }
            else{
              alert("failed to add")
      
            }
      

        })
        

    }


    function scrollTopage() {
        const elements = document.getElementsByClassName("header1"); 
        if (elements.length > 0) {
          elements[0].scrollIntoView({ behavior: "smooth" });
        } else {
          console.error('Target element not found');
        }
      }
 
    function deletefun(){
        localStorage.removeItem('a','null');
      }
  return (
    <div className='body' >

    <div style={{ backgroundColor: "black", backgroundSize:"100vh"}} >
        {/* 𝒦𝒸𝒜𝒾𝓇𝓁𝒾𝓃𝑒𝓈  */}
        <div className='header'>
        <img style={{ width: "18vw",cursor:"pointer ",height:"10vh" }} src={Logo} alt='Logo' />
    
          <div className="menu-links">
          <div class="navbar">
      <div class="dropdown">
        <button style={{backgroundColor:"black",paddingRight:"10px",fontSize:"1vw"}} className="dropbtn">PROFILE
        </button>
        <div style={{backgroundColor:"black"}} class="dropdown-content">
          <a style={{color:"white",fontSize:"1vw"}}href="/orderf">check orders</a>
          <a style={{color:"white",fontSize:"1vw"}} href="/chpa">change password</a>
          <a style={{color:"white",fontSize:"1vw"}} href="/airinfo">Airline info</a>
    
          
          <a onClick={deletefun} style={{color:"white",fontSize:"1vw"}}href="/">Logout</a>
    
        </div>
      </div> 
    </div>
    
    <FontAwesomeIcon style={{color:"white",paddingRight:"4vw",paddingTop:"20px",height:"1.3vh"}} icon={faArrowRight} />      
        {/* <Link to="/">
              <h3>Logout</h3>
            </Link>
             */}
          </div>
        </div>
        <div className='header1'>

        <div style={{display:"flex",justifyContent:"space-between",paddingTop:"10vh"}} className="menu-links">
        <div className='left'>
            <h4 style={{color:"white",paddingLeft:"2vw",fontSize:"1vw"}}>Admin page</h4>
        </div>
           <h4 style={{color:"#ffffff",paddingRight:"5vw",fontSize:"1vw",fontFamily:"monospace"}}>Welcome, <span style={{color:"rgb(251, 87, 28)"}}>{a}</span></h4>
        </div>
      </div>
      <div style={{ marginTop: "3vh", color: "black", width: "100%", height: "9vh", position: "relative" }} className='header1'>
    <img style={{ width: "100%", height: "9vh" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpaWlQcSrC9WwW8bm593kYxfHt1X77LKwHzA&usqp=CAU' alt='image' />
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
        <h3 style={{fontFamily:"monospace", fontSize:"1.5vw"}}>Add Airline </h3>
    </div>
    <div style={{height:"90vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid red"}} className='insertdata'>
        <div style={{width:"50vw",height:"50vh",display: 'flex', flexDirection: 'column', alignItems: 'center',marginBottom:"25vh"}} className='inside'>
            <h4 style={{color:" rgb(251, 87, 28)",fontSize:"1vw"}}>Departure city</h4>
            <input type='text' id='desname'placeholder='Select Departure city'  ></input>
            <h4 style={{color:"rgb(251, 87, 28)",fontSize:"1vw"}}>Arrival city</h4>    
            <input type='text' id='ariname'placeholder='Select Arrival city'  ></input>
            <h4 style={{color:"rgb(251, 87, 28)",fontSize:"1vw"}}>Airline Number</h4>
            <input type='number' id='num'placeholder='Type the airplane number'  ></input>
            <h4 style={{color:"rgb(251, 87, 28)",fontSize:"1vw"}}>Departure Date</h4>
            <input type='date' id='date'placeholder='Select departure date'  ></input>
            <h4 style={{color:"rgb(251, 87, 28)",fontSize:"1vw"}}>Airline</h4>
            <select style={{width:"10vw"}} id='airline' placeholder='Select Airline'>
            <option value='emirates'>Emirates</option>
            <option value='airasia'>Air Asia</option>
            <option value='airindia'>Air India</option>
            <option value='indigo'>IndiGo</option>
        </select>
             <h4 style={{color:"rgb(251, 87, 28)"}}>Time</h4>
                    <input style={{width:"10vw"}} type="time" id="time" oninput="updateAnalysis()" name="birthtime"/>

        <button onClick={handleSubmit} style={{color:"white",backgroundColor:"rgb(251, 87, 28)",marginTop:"10px"}}>Submit</button>
        </div>

    </div>
</div>
            
    
    
    <div style={{height:"30vh",width:"100vw",marginTop:"90vh"}} className='fotter'>
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
            <p style={{color:"black",fontSize:"1.3vw"}}>Copyrigths reserved &nbsp;&nbsp;&nbsp; <span>Kcairline@2024</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <button onClick={scrollTopage} style={{backgroundColor:"transparent",color:"white",cursor:"pointer",backgroundColor:"rgb(251, 87, 28)",fontSize:"1vw"}}>click <FontAwesomeIcon icon={faArrowUp} />  </button> </p>
           
          </div>
    
    </div>
      
    </div>  
    </div>
  )
}

export default admin