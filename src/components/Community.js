import React from 'react'

function Community() {
  return (
  <React.Fragment>
    <body className="bodyC">
     <div className="borderC">
        <div>
      <h1 className="com"style={{ color: 'red'  }}>Communities</h1>
      <p className="com">In a bid to ensure smooth learning path for our users, below listed are links to our direct communities on different social networks.</p>
      Feel free to:
      <ul className= "com">
          <li className="com">Practice: tips dropped by others to aid your learning</li>
          <li className="com">Ask: questions about issues encountered or something you don't understand</li>
          <li className="com">Teach: inquire from others who understands it better than you know</li>
          <li className="com">Help: give help always as it is in the same way you will receive</li>
      </ul>
      </div>
  
      <div className="handlesC">
              <ul className="com">
                <h3 className="com" style={{ color: 'red'  }}>Links</h3>
  
              <li className="com"><img src="assets/img/5365678_fb_facebook_facebook logo_icon.png" alt="" /><a href="https://facebook.com">Facebook Community</a></li>
  
              <li className="com"><img src="assets/img/4747499_github_icon.png" alt="" /><a href="https://github.com">Git Hub Community</a></li>
  
  
               <li className="com"><img src="assets/img/2993744_slack_social media_icon.png" alt=""/><a href="f.com">Slack Community</a></li>
             
              <li className="com"><img src="assets/img/5296516_tweet_twitter_twitter logo_icon.png" alt=""/><a href="https://twitter.com">Twitter Community</a></li>
                
                </ul>
            </div>
      </div>
      </body>
  </React.Fragment>
  )
}

export default Community