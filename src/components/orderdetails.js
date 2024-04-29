import './home.css';
import React from 'react';
import Logo from './images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Razorpay from 'razorpay';
import axios from 'axios';
import config from '../config';

const Orderd = () => {
    const navigate = useNavigate();

    const paymentHandler = async (event) => {

        axios.post(`${config.url}/insertcustomerdata`,{
            fname: document.getElementById("firstName").value,
            mname: document.getElementById("middleName").value,
            lname: document.getElementById("lastName").value,
            add: document.getElementById("address").value,
            pin: document.getElementById("pincode").value,
            phn: document.getElementById("phoneNumber").value,
            aphn: document.getElementById("alternativePhone").value,
            city: document.getElementById("city").value,
            b:localStorage.getItem("airID")
        }).then((res)=>{
            console.log(res.data);
            if (res.data === "received data") {
                console.log("received");
              }
               else {
                console.log("not inserted");
              }
              

        })
        const amount = 500000;
        const currency = 'INR';
        const receiptId = '1234567890';
    
        const response = await fetch(`${config.url}/order`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            amount,
            currency,
            receipt: receiptId
          })
        })
    
          const order = await response.json();
          console.log('order', order);
    
    
          var option = {
            key:"",
            // key_id:"rzp_test_LlSQ8ZbU7Jku2v",
            amount,
            currency,
            name:"KcAirline",
            description: "Test Transaction",
            order_id:order.id,
            handler: async function(response) {
              
              const body = {...response,}
    
              const validateResponse = await fetch(`${config.url}/validate`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
    
              })
    
              const jsonResponse = await validateResponse.json();
             
              console.log('jsonResponse', jsonResponse);
              
            },
            prefill: {
              name: "Krishna Chaitanya", 
              email: "krishna@gmail.com",
              contact: "9000000000", 
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "orange",
            },
          }
    
          var rzp1 = new window.Razorpay(option);
          rzp1.on("payment.failed", function(response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
          })
          navigate('/success');

          rzp1.open();
          event.preventDefault();
      }

    function scrollTopage() {
        const elements = document.getElementsByClassName("header1");
        if (elements.length > 0) {
            elements[0].scrollIntoView({ behavior: "smooth" });
        } else {
            console.error('Target element not found');
        }
    }

    function deletefun() {
        localStorage.removeItem('a', 'null');
    }

    var a = localStorage.getItem("un");
    var b = localStorage.getItem("airID");

    return (
        <div className='body'>
            <div style={{ backgroundColor: "black", backgroundSize: "100vh" }}>
                <div className='header'>
                    <img style={{ width: "18vw", cursor: "pointer", height: "10vh" }} src={Logo} alt='Logo' />
                    <div className="menu-links">
                        <div className="navbar">
                            <div className="dropdown">
                                <button  style={{backgroundColor:"black"}}className="dropbtn">PROFILE</button>
                                <div style={{ backgroundColor: "black" }} class="dropdown-content">
                                    <a style={{ color: "white", fontSize: "1vw", }} href="/home">profile</a>
                                    <a style={{ color: "white", fontSize: "1vw" }} href="/orderf">check orders</a>
                                    <a style={{ color: "white", fontSize: "1vw" }} href="/chpa">change password</a>
                                    <a onClick={deletefun} style={{ color: "white", fontSize: "1vw" }} href="/">Logout</a>
                                </div>
                            </div>
                        </div>
                        <FontAwesomeIcon style={{ color: "white", paddingRight: "4vw", paddingTop: "20px", height: "1.3vh" }} icon={faArrowRight} />
                    </div>
                </div>
                <div className='header1'>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "10vh" }} className="menu-links">
                        <div className='left'>
                            <h4 style={{ color: "white", paddingLeft: "2vw" }}>Customer page</h4>
                        </div>
                        <h4 style={{ color: "#ffffff", paddingRight: "5vw", fontSize: "1vw", fontFamily: "monospace" }}>Welcome, <span style={{ color: "rgb(251, 87, 28)" }}>{a}</span></h4>
                    </div>
                </div>
                <div style={{ marginTop: "3vh", color: "black", width: "100%", height: "9vh", position: "relative" }} className='header1'>
                    <img style={{ width: "100%", height: "9vh" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpaWlQcSrC9WwW8bm593kYxfHt1X77LKwHzA&usqp=CAU' alt='image' />
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                        <h3 style={{ fontFamily: "monospace", fontSize: "25px" }}>Personal Information</h3>
                    </div>
                    <div style={{ height: "80vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid red" }} className='insertdata'>
                        <div style={{ width: "60%", display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: "25vh" }} className='inside'>
                            <h4 style={{ color: "#ffffff", paddingRight: "5vw", fontSize: "1vw", fontFamily: "monospace" }}>Booking for flight id: <span style={{ color: "rgb(251, 87, 28)" }}>{b}</span></h4>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ marginRight: '10px', width: '30%' }}>
                                    <h4 style={{ color: "rgb(251, 87, 28)" }}>First Name</h4>
                                    <input type='text' id='firstName' placeholder='Enter First Name' style={{ width: '100%' }}></input>
                                </div>
                                <div style={{ marginRight: '10px', width: '30%' }}>
                                    <h4 style={{ color: "rgb(251, 87, 28)" }}>Middle Name</h4>
                                    <input type='text' id='middleName' placeholder='Enter Middle Name' style={{ width: '100%' }}></input>
                                </div>
                                <div style={{ width: '30%' }}>
                                    <h4 style={{ color: "rgb(251, 87, 28)" }}>Last Name</h4>
                                    <input type='text' id='lastName' placeholder='Enter Last Name' style={{ width: '100%' }}></input>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ marginRight: '10px', width: '30%' }}>
                                    <h4 style={{ color: "rgb(251, 87, 28)" }}>Address</h4>
                                    <input type='text' id='address' placeholder='Enter Address' style={{ width: '100%' }}></input>
                                </div>
                                <div style={{ marginRight: '10px', width: '30%' }}>
                                    <h4 style={{ color: "rgb(251, 87, 28)" }}>Pincode</h4>
                                    <input type='text' id='pincode' placeholder='Enter Pincode' style={{ width: '100%' }}></input>
                                </div>
                                <div style={{ width: '30%' }}>
                                    <h4 style={{ color: "rgb(251, 87, 28)" }}>Phone Number</h4>
                                    <input type='tel' id='phoneNumber' placeholder='Enter Phone Number' style={{ width: '100%' }}></input>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ marginRight: '10px', width: '30%' }}>
                                    <h4 style={{ color: "rgb(251, 87, 28)" }}>Alternative Phone</h4>
                                    <input type='tel' id='alternativePhone' placeholder='Enter Alternative Phone' style={{ width: '100%' }}></input>
                                </div>
                                <div style={{ marginRight: '10px', width: '30%' }}>
                                    <h4 style={{ color: "rgb(251, 87, 28)" }}>City</h4>
                                    <input type='text' id='city' placeholder='Enter City' style={{ width: '100%' }}></input>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                                <input type="checkbox" id="cardPayment" name="paymentOption" value="card" />
                                <label style={{ color: "rgb(251, 87, 28)" }} htmlFor="cardPayment">Card Payment</label>
                                <input type="checkbox" id="phonePePayment" name="paymentOption" value="phonePe" />
                                <label style={{ color: "rgb(251, 87, 28)" }} htmlFor="phonePePayment">PhonePe Payment</label>
                            </div>
                            <button  onClick={paymentHandler}style={{ color: "white", backgroundColor: "rgb(251, 87, 28)", marginTop: "10px" }}>Proceed</button>
                        </div>
                    </div>
                </div>
                <div style={{ height: "30vh", width: "100vw", marginTop: "75vh" }} className='fotter'>
                    <footer className="footer-distributed">
                        <div className="footer-left">
                            <h3 style={{ fontSize: "2vw" }}>KC<span>AIRLINES</span></h3>
                            <p className="footer-links">
                                <a style={{ fontSize: "1vw" }} href="#" className="link-1">Home</a>
                                <a style={{ fontSize: "1vw" }} href="#">Pricing</a>
                                <a style={{ fontSize: "1vw" }} href="#">About</a>
                                <a style={{ fontSize: "1vw" }} href="#">Faq</a>
                                <a style={{ fontSize: "1vw" }} href="#">Contact</a>
                            </p>
                        </div>
                        <div className="footer-center">
                            <div>
                                <i className="fa fa-map-marker"></i>
                                <p style={{ fontSize: "1vw" }}><span>pincode</span> Vijayawda,KLU</p>
                            </div>
                            <div>
                                <i className="fa fa-phone"></i>
                                <p style={{ fontSize: "1vw" }}>8811002200</p>
                            </div>
                            <div>
                                <i className="fa fa-envelope"></i>
                                <p style={{ fontSize: "1vw" }}><a href="mailto:support@company.com">Kcairline@company.com</a></p>
                            </div>
                        </div>
                        <div className="footer-right">
                            <p style={{ fontSize: "0.8vw" }} className="footer-company-about">
                                <span>About the company</span>
                                Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                            </p>
                            <div className="footer-icons">
                                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                    </footer>
                    <div style={{ width: "100vw", height: "5vh", textAlign: "center", justifyContent: "center" }} className='copy'>
                        <p style={{ color: "black", fontSize: "1.3vw" }}>Copyrigths reserved &nbsp;&nbsp;&nbsp; <span>Kcairline@2024</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <button onClick={scrollTopage} style={{ backgroundColor: "transparent", color: "white", cursor: "pointer", backgroundColor: "rgb(251, 87, 28)", fontSize: "1vw" }}>click <FontAwesomeIcon icon={faArrowUp} />  </button> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orderd;
