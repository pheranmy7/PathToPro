import React from 'react'  
function About() {
  return (
    <React.Fragment>
        <body className='bodyA'>
                   <div className="section-about">
    <div className="container-about">
        <div className="content-sectionAbout">
            <div className="aboutT">
                <h1 className="abt"  >About Us</h1>
            </div>
            <div className="contentA">
                <h3 className="abt">PathToPro is a world-class e-library that intends to preserve technology history by organizing, maintaining, and increasing access to modern day programming knowledge.

                    The Library will increase the online community’s knowledge and interaction with archive resources to make the user comfortable in his/her journey to be a professional developer.
                </h3>
                <p className="abt">We also intend to ensure that the world as a whole has an easy access to quality,
                    inspiring courses without stress and hitch.</p>
            </div>
            <div className="socialAbout">
               <a className="abt" href="https://facebook.com"><img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" /></a>
               <a className="abt" href="https://twitter.com"> <img src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter" /></a>
               <a className="abt" href="f.com"> <img src="https://i.ibb.co/b30HMhR/social-linkedin.png" alt="Linkedin" /></a>
              
            </div>
        </div>
    </div>
    <div className="image-sectionAbout">
        <img className="abt" src="assets/img/path-1-removebg-preview.png" alt=""/>
    </div>
</div>
</body>
</React.Fragment>

  )
}

export default About


