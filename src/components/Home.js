import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <React.Fragment>
      <body className="body">
     <header className="container"
     style={{ backgroundImage: "url(assets/img/landing.png)",
     backgroundRepeat: 'no-repeat',
     backgroundPosition: 'center',
     backgroundSize: 'cover',
       width:'100%',
       marginBottom:'-50px'  }}>
      
            <nav>
             <img src="assets/img/ptpp.png" alt="PathToPro" width="15%" />
               <ul>
                   <li className="main-link">  <Link to="/">Home</Link></li>
                   <li className="main-link">  <Link to="/Signed">Courses</Link></li>
                   <li className="main-link">  <Link to="/Feedback">Contact</Link></li>
                   <li className="main-link">  <Link to="/About">About</Link></li>
                   <li><Link to= "/Sign"><button className="cta" id="">SIGN IN</button></Link></li>  
               </ul>
           </nav>
   
               <div className="header_main">
                   <div className="header_main_content">
                       <h1 className="header_main_content_h1">JOURNEY TO BECOME A PRO</h1>
                       <p className="header_main_content_p">
                           Programming isn't about what you know; it's about what you can figure out, so the only way to learn a new programming language is by writing programs in it. Sign up and begin your path now!
                       </p>
                            <Link to= "/Signed"><button className="header_main_content_button">SIGN UP</button></Link>
                   </div>
               </div>
       </header>
       <section className="about">
           <div className="swiper aboutSwiper">
             <div className="swiper-wrapper">
               <div className= "swiper-slide">
                 <div className="card">
                   <img src="assets/img/Front-End-Developer 1.jpg" alt=""/>
                   <div className="card-text">
                   <h1> Frontend Development</h1>
                   <p>
                   Create a user friendly interface
                 </p>
                 <Link className ="btn btn-secondary" to="/Signed"> Go Pro</Link>  
                   </div>
                 </div>
               </div>
               <div className="swiper-slide">
                 <div className="card">
                   <img src="assets/img/ui.ux.jpg" alt=""/>
                   <div className="card-text">
                     <h1>UI/UX Design</h1>
                     <p>
                       Create that crispy design of yours now
                     </p>
                     <Link className ="btn btn-secondary" to="/Signed"> Go Pro</Link>  
                   </div>
                 </div>
               </div>
               <div className="swiper-slide">
               <div className="card">
                 <img src="assets/img/main backend 1.jpg" alt=""/>
                 <div className="card-text">
                   <h1> Backend Development</h1>
                   <p>
                     Be the creator of the whole magic
                   </p>
                   <Link className ="btn btn-secondary" to="/Signed"> Go Pro</Link>  
                 </div>
               </div>
               </div>
               </div>
               <div className="swiper-pagination">
             </div>
           </div>
         </section>
   
         <section className="services">
           <div className="container">
             <div className="service">
               <i className="fas fa-user-graduate fa-4x"></i>
               <p>Endless patience. Patience is the most important trait to become a great programme</p>
             </div>
             <div className="service">
               <i className="fas fa-user-graduate fa-4x"></i>
               <p>  Increase your degree of creativity and problem solving </p>
             </div>
             <div className="service">
               <i className="fas fa-user-graduate fa-4x"></i>
               <p> Gain experience by interacting more with various online communities</p>
             </div>
             <div className="service">
               <i className="fas fa-user-graduate fa-4x"></i>
               <p>All these are good tips to become a certified pro and guide you to success</p>
             </div>
           </div>
         </section>

         <section className="carbon dark"
         style={{ backgroundImage: "url(assets/img/Web-Development-Bootcamp.jpeg)",
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
           width:'100%',
           marginBottom:'-50px'  }}>
           <div className="content">
             <h2>HELLO DEV!</h2>
             <h3><p> Pathtopro.com is a website that offers users the access to learn from a cloud based library with all necessary and quality contents to guide the user in his or her path to go pro. We offer different areas in web Development to grind out very good developers </p></h3>
                <Link className= "btn" to= "/Signed"> Learn More <i className="fas fa-chevron-right"></i></Link>
           </div>
         </section>
   
         <section className="follow">
           <p>Follow PathToPro</p>
           <a href="https://facebook.com">
             <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
           </a>
           <a href="https://twitter.com">
             <img src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter" />
           </a>
           <a href="https://linkedin.com">
             <img src="https://i.ibb.co/b30HMhR/social-linkedin.png" alt="Linkedin" />
           </a>
         </section>

         <section className="links">
           <div className="links-inner">
             <ul>
               <li><h3 className="h">Categories</h3></li>
               <li><Link to= "/Signed">UI Design</Link></li> 
               <li><Link to= "/Signed">Frontend</Link></li>
               <li><Link to= "/Signed">Backend</Link></li>
               <li><Link to= "/Signed">Java</Link></li>
             </ul>
             <form>
             <div className="search">
               <input type="email" placeholder="Input email to get newsletters" />
              <button type="submit"> <Link to="/Signed">Subscribe</Link></button>
           </div>
             </form>
           </div>
         </section>

  <footer className="footer">
    <div className="footer-inner">
      <div><i className="fas fa-globe fa-2x"></i> English (United States)</div>
      <ul>
        <li><Link to="/Community">Connect</Link></li> 
        <li> <Link to="/About">About Us</Link></li>  
                <li><Link to="/Contact">Contact Us</Link></li>   
                <li> <Link to="/Privacy">Privacy & policies</Link></li>  
                <li> <Link to="/Privacy">Terms of use</Link></li>  
                <li>   <Link to="/About">&copy; PathToPro</Link></li>
      </ul>
    </div>
  </footer>
  </body>
    </React.Fragment>
  )
}

export default Home