import './home.css';
import React, { useState } from 'react';
import Logo from './images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import config from '../config';



const Admin = () => {
    const navigate = useNavigate();

    var a = localStorage.getItem("un");
    const [responseData, setResponseData] = useState(null);


    function handleSubmit() {
        const desname1 = document.getElementById('desname1').value;
        const ariname1 = document.getElementById('ariname1').value;
        const date1 = document.getElementById('date1').value;
        const flightClass = document.getElementById('class').value;


        axios.post(`${config.url}/coninsert`, {
            desname1: desname1,
            ariname1: ariname1,
            date1: date1,
            class: flightClass,
        })
            .then((res) => {
                if (res.data != null) {
                    // Handle the case when flights are available
                    console.log(res.data);
                    setResponseData(res.data);


                } else {
                    setResponseData(null);

                }
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle errors from the server
            });
    }
    function wow(){
        alert("Booking of Flight:"+document.getElementById("airId").value)
        localStorage.setItem("airID",document.getElementById("airId").value)
        navigate('/orderd');
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
    return (
        <div className='body' >

            <div style={{ backgroundColor: "black", backgroundSize: "100vh" }} >
                {/* 𝒦𝒸𝒜𝒾𝓇𝓁𝒾𝓃𝑒𝓈  */}
                <div className='header'>
                    <img style={{ width: "18vw", cursor: "pointer ", height: "10vh" }} src={Logo} alt='Logo' />

                    <div className="menu-links">
                        <div class="navbar">
                            <div class="dropdown">
                                <button style={{ backgroundColor: "black", paddingRight: "10px", fontSize: "1vw" }} className="dropbtn">PROFILE
                                </button>
                                <div style={{ backgroundColor: "black" }} class="dropdown-content">
                                    <a style={{ color: "white", fontSize: "1vw" }} href="/home">profile</a>
                                    <a style={{ color: "white", fontSize: "1vw" }} href="#">check orders</a>
                                    <a style={{ color: "white", fontSize: "1vw" }} href="/chpa">change password</a>


                                    <a onClick={deletefun} style={{ color: "white", fontSize: "1vw" }} href="/">Logout</a>

                                </div>
                            </div>
                        </div>

                        <FontAwesomeIcon style={{ color: "white", paddingRight: "4vw", paddingTop: "20px", height: "1.3vh" }} icon={faArrowRight} />
                        {/* <Link to="/">
                          <h3>Logout</h3>
                        </Link>
                         */}
                    </div>
                </div>
                <div className='header1'>

                <div style={{display:"flex",justifyContent:"space-between",paddingTop:"10vh"}} className="menu-links">
                        <div className='left'>
                            <h4 style={{ color: "white", paddingLeft: "2vw" }}>Customer page</h4>
                        </div>
                        <h4 style={{ color: "#ffffff", paddingRight: "5vw", fontSize: "1vw", fontFamily: "monospace" }}>Welcome, <span style={{ color: "rgb(251, 87, 28)" }}>{a}</span></h4>
                    </div>
                </div>
                <div style={{ marginTop: "3vh", color: "black", width: "100%", height: "9vh", position: "relative" }} className='header1'>
                    <img style={{ width: "100%", height: "9vh" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpaWlQcSrC9WwW8bm593kYxfHt1X77LKwHzA&usqp=CAU' alt='image' />
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                        <h3 style={{ fontFamily: "monospace", fontSize: "25px" }}>View AIRLINES</h3>
                    </div>
                    <div style={{ height: "80vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid red" }} className='insertdata'>
                        <div style={{ width: "50vw", height: "50vh", display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: "25vh" }} className='inside'>
                        <h4 style={{ color: "rgb(251, 87, 28)" }}>Departure city</h4>
                            <select id="desname1">
                                <option value="Goa">Goa</option>
                                <option value="Vizag">Vizag</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                            </select>

                            <h4 style={{ color: "rgb(251, 87, 28)" }}>Arrival city</h4>
                            <input type='text' id='ariname1' placeholder='Select Arrival city' ></input>
                            <h4 style={{ color: "rgb(251, 87, 28)" }}>Departure Date</h4>
                            <input type='date' id='date1' placeholder='Select departure date' ></input>
                            <h4 style={{ color: "rgb(251, 87, 28)" }}>Class</h4>
                            <select style={{ width: "10vw" }} id='class' placeholder='Select Class'>
                                <option value='economy'>Economy</option>
                                <option value='premium'>Premium Economy</option>
                                <option value='business'>Business</option>
                            </select>

                            <button onClick={handleSubmit} style={{ color: "white", backgroundColor: "rgb(251, 87, 28)", marginTop: "10px" }}>Submit</button>
                        </div>

                    </div>
                </div>
                <div style={{ marginTop: "60vh", width: "90vw" }} className='table'>
                    <table style={{ color: "blue", border: "1px solid white", width: "100%", borderCollapse: "collapse", margin: "5vw" }}>
                        <thead style={{ backgroundColor: "black", color: "white" }}>
                            <tr>
                                <th style={{ border: "1px solid white", padding: "8px", color: "rgb(251, 87, 28)" }}>ID</th>
                                <th style={{ border: "1px solid white", padding: "8px", color: "rgb(251, 87, 28)" }}>Departure City</th>
                                <th style={{ border: "1px solid white", padding: "8px", color: "rgb(251, 87, 28)" }}>Arrival City</th>
                                <th style={{ border: "1px solid white", padding: "8px", color: "rgb(251, 87, 28)" }}>Departure Date</th>
                                <th style={{ border: "1px solid white", padding: "8px", color: "rgb(251, 87, 28)" }}>Airline Name</th>
                                <th style={{ border: "1px solid white", padding: "8px", color: "rgb(251, 87, 28)" }}>Airline Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {responseData === null || !Array.isArray(responseData) || responseData.length === 0 ? (
                                <tr>
                                    <td colSpan="7" style={{ border: "1px solid white", padding: "8px", color: "white" }}>
                                        No flights available
                                    </td>
                                </tr>
                            ) : (
                                responseData.map((user) => (
                                    <tr key={user._id}>
                                   <td style={{ border: "1px solid white", padding: "8px", color: "white" }}>{user.num}</td>
                              <td style={{ border: "1px solid white", padding: "8px", color: "white" }}>{user.desname}</td>
                              <td style={{ border: "1px solid white", padding: "8px", color: "white" }}>{user.ariname}</td>
                              <td style={{ border: "1px solid white", padding: "8px", color: "white" }}>{user.date}</td>
                              <td style={{ border: "1px solid white", padding: "8px", color: "white" }}>{user.airline}</td>
                              <td style={{ border: "1px solid white", padding: "8px", color: "white" }}>{user.time}</td>

                              
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>;
                    <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
    <div>
        <input style={{borderRadius:"30px"}}  type='number' placeholder='Enter Flight ID' id='airId'></input>
    </div>
    <div>
        <button onClick={wow} style={{ color: "white", backgroundColor: "rgb(251, 87, 28)", marginTop: "10px" }}>order</button>
    </div>
</div>

                </div>



                <div style={{ height: "30vh", width: "100vw", marginTop: "35vh" }} className='fotter'>
                    <footer class="footer-distributed">
                        <div class="footer-left">
                            <h3 style={{ fontSize: "2vw" }}>KC<span>AIRLINES</span></h3>
                            <p class="footer-links">
                                <a style={{ fontSize: "1vw" }} href="#" class="link-1">Home</a>
                                <a style={{ fontSize: "1vw" }} href="#">Pricing</a>
                                <a style={{ fontSize: "1vw" }} href="#">About</a>
                                <a style={{ fontSize: "1vw" }} href="#">Faq</a>
                                <a style={{ fontSize: "1vw" }} href="#">Contact</a>
                            </p>


                        </div>

                        <div class="footer-center">

                            <div>
                                <i class="fa fa-map-marker"></i>
                                <p style={{ fontSize: "1vw" }}><span>pincode</span> Vijayawda,KLU</p>
                            </div>

                            <div>
                                <i class="fa fa-phone"></i>
                                <p style={{ fontSize: "1vw" }}>8811002200</p>
                            </div>

                            <div>
                                <i class="fa fa-envelope"></i>
                                <p style={{ fontSize: "1vw" }}><a href="mailto:support@company.com">Kcairline@company.com</a></p>
                            </div>

                        </div>

                        <div class="footer-right">

                            <p style={{ fontSize: "0.8vw" }} class="footer-company-about">
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
                    < div style={{ width: "100vw", height: "5vh", textAlign: "center", justifyContent: "center" }} className='copy'>
                        <p style={{ color: "black", fontSize: "1.3vw" }}>Copyrigths reserved &nbsp;&nbsp;&nbsp; <span>Kcairline@2024</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <button onClick={scrollTopage} style={{ backgroundColor: "transparent", color: "white", cursor: "pointer", backgroundColor: "rgb(251, 87, 28)", fontSize: "1vw" }}>click <FontAwesomeIcon icon={faArrowUp} />  </button> </p>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Admin;
