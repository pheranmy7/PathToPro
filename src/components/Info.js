import React from 'react'
import {Link} from 'react-router-dom'
function Info() {
  return (
    <React.Fragment>
        <body className="bodyI">
        <div class="side_wrapper">
  <section class="about-dev">
    <header class="profile-card_header">
      <div class="profile-card_header-container">
        <div class="profile-card_header-imgbox">
          <img src="" alt="Mewy Pawpins" />
        </div>
        <h1>Isaac Newton <span>Web Developer</span></h1>
      </div>
    </header>
    <div class="profile-card_about">
      <h2>All About Isaac</h2>
      <p>I'm an aspiring web Developer from Nigeria,looking to increase my knowledge in programming. I like writing codes and playing games. I also do well in online communities by been very active in all i do.</p>
      <footer class="profile-card_footer">
        <div class="social-row">
          <div class="heart-icon" title="No Health Issues">
         
          </div>

        </div>
        <p><Link to="/Home">Web Developer</Link></p>
      </footer>
    </div>
  </section>
</div>
    
            </body>
    </React.Fragment>
  )
}

export default Info