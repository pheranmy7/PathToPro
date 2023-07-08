import React from 'react'
import {Link} from 'react-router-dom'
function User() {
  return (
    <React.Fragment>
      <body className="bodyL">
     
          
  <div className="topnavL" />
  <Link className="activeL" to ="/About">Home</Link>
  <Link to ="/Community">News</Link>
  <Link to ="/Contact">Contact</Link>

    <div className="topnav-rightL" />
      <a href="f.com"><img src="assets/img/search_icon.png" alt="" /></a>
      <div className="dropdownL">
        <img src="assets/img/user_icon.png" alt=""    className="dropbtnL" />
        <div className="dropdown-contentL">
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/About">Pay Bills</Link>
        <Link to="/Profile">Profile Update</Link>
        <Link to="/About">Purchase Book</Link>
        <Link to="/History">Purchase History</Link>
        <Link to="/Info">Contact info</Link>
        <Link to="/Home">Log out</Link>
        </div>
      </div>



    <div   className="centeredL">
      <h2 className="usp">Path To Pro
      <div className="lineL"></div>
      <p className="usp">
        Becoming a techie
      </p>
    </h2>   
    <Link className="btnL" to="/About"> 
    Thread<i className="fas fa-chevron-right"></i>
    </Link>
    </div>
  
    <section className="home-cardsL">
      <div>
        <img className="usp" src="assets/img/pexels-ricardo-esquivel-1907785.jpg" alt="" />
        <h3 className="usp"style={{ color: 'red'  }}>Best Materials</h3>
        <p className="usp">
              Materials that are less complex and beginner friendly which slowly guides you on your path to being a pro
        </p>
      </div>
      <div>
        <img className="usp" src="assets/img/pexels-shvets-production-7516538.jpg" alt="" />
        <h3 className="usp"style={{ color: 'red'  }}>Cloud Library</h3>
        <p className="usp">
         While on the journey, all your paid courses and books are stored on the cloud storage to access on the go, anytime and anywhere
        </p>
      </div>
      <div>
        <img className="usp" src="assets/img/pexels-mikhail-nilov-9158362.jpg" alt="" />
        <h3 className="usp" style={{ color: 'red'  }}>All Path</h3>
        <p className="usp">
   Contains all path needed to be threaded in becoming a web developer that enables you to take more than a course at a time
        </p>
      </div>
     <div>
        <img className="usp" src="assets/img/pexels-tima-miroshnichenko-9572495.jpg" alt="" />
        <h3 className="usp" style={{ color: 'red'  }}>Connect </h3>
        <p className="usp">
         A community with people threading this path with you, share ideas, problems and solutions for good progress
        </p>
      </div>
      
    </section>

   
      
      <section className="carbon darkL">
        <div className="contentL">
          <h2 className="usp">HELLO DEV!</h2> btnL
          <h3 className="usp"><p>Thanks for joining this great e-library. We would help you in your path to become a professional developer in any area you wish to thread your journey on, also making you comfortable while accessing any of our resources</p></h3>
          <Link className= "btnL" to= "/About">  
          Learn More <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </section>


      <section className="followL">
        <p className="usp">Follow PathToPro</p>
        <a href="https://facebook.com">
          <img className="usp" src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com">
          <img className="usp" src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter" />
        </a>
        <a href="https://linkedin.com">
          <img className="usp" src="https://i.ibb.co/b30HMhR/social-linkedin.png" alt="Linkedin" />
        </a>
      </section>
      
      <section className="linksL">
        <div className="links-innerL">
          <ul className="usp">
            <li className="usp"><h3 className="usp" style={{ color: 'red'  }}>Categories</h3></li>
            <li className="usp"><Link to= "/About">UI Design</Link></li>
            <li className="usp"><Link to= "/About">Frontend</Link></li>
            <li className="usp"><Link to= "/About">Backend</Link></li>
            <li className="usp"><Link to= "/About">Java</Link></li>
          </ul>
          <form className="usp">
          <div className="searchL">
            <input className="usp" type="email" placeholder="Input email to get newsletters" />
            <button type="submit" className="usp"> <Link to="/Community">Subscribe</Link></button>
        </div>
          </form> 
        </div>
      </section>
 
 <footer className="footerL">
  <div className="footer-innerL"> 
    <div className="usp"><i className="fas fa-globe fa-2xL"></i> English (United States)</div>
    <ul className="usp">
    <li  className="usp" ><Link to="/Community">Connect</Link></li> 
        <li className="usp"> <Link to="/About">About Us</Link></li>  
                <li className="usp"><Link to="/Contact">Contact Us</Link></li>   
                <li className="usp"> <Link to="/Privacy">Privacy & policies</Link></li>  
                <li className="usp"> <Link to="/Privacy">Terms of use</Link></li>  
                <li  className="usp">   <Link to="/About">&copy; PathToPro</Link></li>
    </ul>
  </div>
</footer>
</body>
    </React.Fragment>
  )
}

export default User