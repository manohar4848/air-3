import './home.css';
import Logo from './images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Plane from './images/plane.png';
import Video from './images/video.mp4';

import config from '../config';


  



const Home = () => {  
  var a= localStorage.getItem("un")

    function scrollTopage() {
    const elements = document.getElementsByClassName("header1"); 
    if (elements.length > 0) {
      elements[0].scrollIntoView({ behavior: "smooth" });
    } else {
      console.error('Target element not found');
    }
  }
  function scrollTopage2() {
    const elements = document.getElementsByClassName("fotter"); 
    if (elements.length > 0) {
      elements[0].scrollIntoView({ behavior: "smooth" });
    } else {
      console.error('Target element not found');
    }
  }
  function scrollTopage1() {
    const elements = document.getElementsByClassName("brands"); 
    if (elements.length > 0) {
      elements[0].scrollIntoView({ behavior: "smooth" });
    } else {
      console.error('Target element not found');
    }
  }
  function scrollTopage1() {
    const elements = document.getElementsByClassName("brands"); 
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
    <div style={{ backgroundColor: "black"}}>
      {/* 𝒦𝒸𝒜𝒾𝓇𝓁𝒾𝓃𝑒𝓈  */}
      <div className='header'>
      <img style={{ width: "18vw",cursor:"pointer ",height:"10vh" }} src={Logo} alt='Logo' />

        <div className="menu-links">
        <div class="navbar">
    <div class="dropdown">
      <button style={{backgroundColor:"black",paddingRight:"10px",fontSize:"1vw"}} className="dropbtn">PROFILE
      </button>
      <div style={{backgroundColor:"black"}} class="dropdown-content">
        <a   style={{color:"white",fontSize:"1vw"}}href="#">profile</a>
        <a style={{color:"white",fontSize:"1vw"}}href="#">check orders</a>
        <a style={{color:"white",fontSize:"1vw"}} href="/chpa">change password</a>
        <a style={{color:"white",fontSize:"1vw"}} href="/botc">book ticket</a>

        
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
        <div  class="dropdown1 ">
      <button style={{backgroundColor:"black",fontSize:"1vw"}} className="dropbtn1">CONTENT IN THE PAGE   <FontAwesomeIcon style={{color:"white",paddingRight:"30px",height:"1.3vh"}} icon={faArrowRight} /> </button>
    
      <div style={{backgroundColor:"black"}} class="dropdown-content1">
        <a onClick={scrollTopage1} style={{color:"white",fontSize:"1vw"}}href="#">Airline</a>
        <a onClick={scrollTopage2} style={{color:"white",fontSize:"1vw"}}href="#">Contact</a>
      </div>
    
      </div> 
           <h4 style={{color:"#ffffff",paddingRight:"5vw",fontSize:"1vw",fontFamily:"monospace"}}>Welcome, <span style={{color:"rgb(251, 87, 28)"}}>{a}</span></h4>
        </div>
      </div>
      
      <div  style={{display:"flex"}}className='prom'>
        <div style={{color:"white",width:"80vw",height:"55vh",}} className='promr'>
          <h1 style={{ fontFamily: "monospace",paddingTop:"150px",paddingLeft:"50px",fontSize:"2vw" }}>  WELCOME</h1>
          <h1 style={{paddingLeft:"150px",fontFamily:"monospace",paddingTop:"5px",fontSize:"2vw"}}> TO KC<span style={{color:"rgb(251, 87, 28)"}}>AIRLINES</span>  <h3 style={{paddingLeft:"5px",fontFamily:"monospace",fontSize:"1vw"}}> All airlines in one search </h3> </h1>
          {/* <h3 style={{paddingLeft:"150px",fontFamily:"monospace",fontSize:"12px"}}> All airlines in one search </h3> */}


        </div>
        <div  style={{width:"50vw"}}className='proml'>
           <img style={{height:"55vh",width:"50vw"}} src='https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2023/05/best-airports-in-the-world.jpeg?fit=1300%2C730&ssl=1'></img>
        </div>
      </div>
      <div style={{ display: "flex",justifyContent:"center"}} className='logo'>
  <marquee behavior="scroll" direction="right" style={{ width: "100%" }}> 
    <img
      src={Plane}
      alt="Plane Logo"
      style={{ marginRight: "5px"}}
    
      
    />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </marquee> 
</div>
      <div style={{ marginTop: "3vh", color: "black", width: "100%", height: "9vh", position: "relative" }} className='header1'>
    <img style={{ width: "100%", height: "9vh" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpaWlQcSrC9WwW8bm593kYxfHt1X77LKwHzA&usqp=CAU' alt='image' />
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
        <h3 style={{fontFamily:"monospace", fontSize:"25px"}}>TOP AIRLINES</h3>
    </div>
</div>


<div style={{margin:"10px",display:"flex"}} className='brands'>
    <div style={{paddingLeft:"25px",paddingTop:"5px"}} className='b1'>
        <Card sx={{ maxWidth:"300px" }}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="w-50"
                    image="https://pluspng.com/img-png/emirates-airlines-logo-png-latest-job-vacancies-at-emirates-group-dubai-uae-airline-logo-1500x1000.png"
                    alt="airlines"
                />
                <CardContent style={{backgroundColor:"black"}}>
                    <Typography gutterBottom variant="h5" component="div" style={{color:"white",fontSize:"2vw"}}>
                        Emirates
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{color:"white",fontSize:"1vw"}}>
                        Emirates is a leading airline based in Dubai, United Arab Emirates. Known for its luxurious services and extensive global network, Emirates has been a pioneer in the aviation industry. With a fleet of modern aircraft.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    <div style={{paddingLeft:"70px",paddingTop:"5px"}} className='b2'>
        <Card sx={{ maxWidth:"300px" }}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="w-100"
                    image="https://www.logo.wine/a/logo/AirAsia_Japan/AirAsia_Japan-Logo.wine.svg"
                    alt="airlines"
                />
                <CardContent style={{backgroundColor:"black"}}>
                    <Typography gutterBottom variant="h5" component="div" style={{color:"white",fontSize:"2vw"}}>
                        AirAsia
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{color:"white",fontSize:"1vw"}}>
                        AirAsia is a low-cost airline headquartered in Malaysia. With a focus on affordability and accessibility, AirAsia has become one of the largest budget carriers in Asia. Offering a wide range of destinations and innovative services.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    <div style={{paddingLeft:"70px",paddingTop:"5px"}} className='b3'>
        <Card sx={{ maxWidth:"300px" }}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="w-100"
                    image="https://www.logo.wine/a/logo/Jetstar_Japan/Jetstar_Japan-Logo.wine.svg"
                    alt="airlines"
                />
                <CardContent style={{backgroundColor:"black"}}>
                    <Typography gutterBottom variant="h5" component="div" style={{color:"white",fontSize:"2vw"}}>
                        JetStar
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{color:"white",fontSize:"1vw"}}>
                        JetStar is a low-cost airline known for its affordable travel options. With a diverse range of destinations and a focus on customer satisfaction, JetStar provides budget-friendly travel opportunities .
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    <div style={{paddingLeft:"100px",paddingTop:"5px"}} className='b4'>
        <Card sx={{ maxWidth:"300px" }}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="w-100"
                    image="https://www.logo.wine/a/logo/IndiGo/IndiGo-Logo.wine.svg"
                    alt="airlines"
                />
                <CardContent style={{backgroundColor:"black"}}>
                    <Typography gutterBottom variant="h5" component="div" style={{color:"white",fontSize:"2vw"}}>
                        IndiGo
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{color:"white",fontSize:"1vw"}}>
                        IndiGo is a prominent low-cost airline in India. Recognized for its punctuality and efficiency, IndiGo offers affordable and reliable air travel. With a modern fleet and a commitment to customer satisfaction.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
</div>
<br/>
<div style={{margin:"10px",display:"flex"}} className='brands'>
    <div style={{paddingLeft:"25px",paddingTop:"5px"}} className='b1'>
        <Card sx={{ maxWidth:"300px" }}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="w-100"
                    image="https://www.logo.wine/a/logo/Air_India/Air_India-Logo.wine.svg"
                    alt="airlines"
                />
                <CardContent style={{backgroundColor:"black"}}>
                    <Typography gutterBottom variant="h5" component="div" style={{color:"white",fontSize:"2vw"}}>
                        AirIndia
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{color:"white",fontSize:"1vw"}}>
                        AirIndia is India's flagship carrier with a rich history and global presence. Offering a blend of traditional hospitality and modern amenities, AirIndia connects passengers to a wide array of destinations.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    <div style={{paddingLeft:"70px",paddingTop:"5px"}} className='b2'>
        <Card sx={{ maxWidth:"300px" }}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="w-100"
                    image="https://www.logo.wine/a/logo/Vistara/Vistara-Logo.wine.svg"
                    alt="airlines"
                />
                <CardContent style={{backgroundColor:"black"}}>
                    <Typography gutterBottom variant="h5" component="div" style={{color:"white",fontSize:"2vw"}}>
                        Vistara
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{color:"white",fontSize:"1vw"}}>
                        Vistara is a premium airline in India known for its luxury services and attention to detail. With a commitment to providing a seamless and delightful travel experience.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    <div style={{paddingLeft:"70px",paddingTop:"5px"}} className='b3'>
        <Card sx={{ maxWidth:"300px" }}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="w-100"
                    width="50vw"
                    image="https://cdn.freebiesupply.com/logos/thumbs/2x/singapore-airlines-1-logo.png"
                    alt="airlines"
                />
                <CardContent style={{backgroundColor:"black"}}>
                    <Typography gutterBottom variant="h5" component="div" style={{color:"white",fontSize:"2vw"}}>
                        Singapore Airlines
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{color:"white",fontSize:"1vw"}}>
                        Singapore Airlines is a world-renowned carrier synonymous with luxury and excellence. Offering impeccable service and a wide network of destinations, Singapore Airlines is a leader in the aviation industry.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    <div style={{paddingLeft:"100px",paddingTop:"5px"}} className='b4'>
        <Card sx={{ maxWidth:"300px" }}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="w-100"
                    image="https://cdn.freebiesupply.com/logos/thumbs/2x/singapore-airlines-1-logo.png"
                    alt="airlines"
                />
                <CardContent style={{backgroundColor:"black"}}>
                    <Typography gutterBottom variant="h5" component="div" style={{color:"white",fontSize:"2vw"}}>
                        Singapore Airlines
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{color:"white",fontSize:"1vw"}}>
                        Singapore Airlines is a world-renowned carrier synonymous with luxury and excellence. Offering impeccable service and a wide network of destinations, Singapore Airlines is a leader in the aviation industry. Travel with Singapore Airlines .
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
</div>
    <br/>
    <br/>
    <div style={{width:"100vw",height:"40vh",marginBottom:"10px"}} className='about'>
      <div style={{display:"flex",justifyContent:"space-around"}} className='abouthead'>
      <h3 style={{color:"rgb(251, 87, 28)",fontSize:"1.5vw"}}>Why KCAirlines?</h3> <h3 style={{color:"rgb(251, 87, 28)",fontSize:"1.5vw"}}>Booking Flights </h3>
      </div>
           <div style={{display:"flex",justifyContent:"space-around"}} className='boxes'>
      <div style={{height:"27vh",width:"30vw",fontSize:"13px",color:"#92999f"}} className='box1'>

     <p style={{fontSize:"1vw"}}> Founded in 2024  KCAirlines is a startup transforming travel with competitive airfares, exclusive discounts, and a seamless online booking experience. Our user-friendly desktop site and mobile app make booking flights, hotels, and holiday packages a breeze. Enjoy Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and more, tailored to meet evolving customer needs.</p>
      </div>
      <div style={{height:"27vh",width:"30vw" ,fontSize:"13px",color:"#92999f"}} className='box1'>

     <p style={{fontSize:"1vw"}}> Founded in 2024, KCAirlines is a startup transforming travel with competitive airfares, exclusive discounts, and a seamless online booking experience. Our user-friendly desktop site and mobile app make booking flights, hotels, and holiday packages a breeze. Enjoy Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and more, tailored to meet evolving customer needs.</p>
      </div>
      </div>
    </div>
    <div style={{width:"100vw",height:"45vh",display:"flex"}} className='part'>
      <div style={{width:"50vw",height:"45vh",margin:"1vh"}} className='part1'>
          <video  autoPlay muted loop style={{width:"50vw",height:"40vh"}} id="background-video1">
            <source src={Video} type="video/mp4" />
          </video>

      </div>
      <div style={{width:"50vw",height:"45vh",margin:"1vh",alignItems:"center",display:"flex",justifyContent:"center"}} className='part1'>
        <div style={{margin:"1vh",width:"30vw",height:"30vh"}} className='matter'>
          <h4 style={{color:"rgb(251, 87, 28)",fontSize:"1.5vw"}}>  Your comfort is our priority</h4>
          <p style={{color:"white",fontSize:"1vw"}}> We are providing you the most comfortable flight ticket booking application ever.</p>

        </div>
          

      </div>


    </div>
<div style={{height:"30vh",width:"100vw"}} className='fotter'>
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
          <p style={{color:"black",fontSize:"1.3vw"}}>Copyrigths reserved &nbsp;&nbsp;&nbsp; <span>Kcairline@2024</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     <button  style={{backgroundColor:"transparent",color:"white",cursor:"pointer",backgroundColor:"rgb(251, 87, 28)",fontSize:"1vw"}}onClick={scrollTopage}>click <FontAwesomeIcon icon={faArrowUp} />  </button> </p>
         
        </div>

</div>
    
</div>  
  
  );
};

export default Home;
