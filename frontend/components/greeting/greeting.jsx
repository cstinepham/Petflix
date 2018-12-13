import React from 'react';

class Greeting extends React.Component {

  render() {
    return <div className="splash-background">
        <div className="splash-navbar">
          <div className="splash-logo"/>
        <button className="login-button">Sign In</button>
        </div>
        <div className="splash-card-1">
          <div className="splash-card-1-text">
            <h1>Watch on any device</h1>
            <p>
              Stream on your phone, tablet, laptop, and TV without paying
              more.
            </p>
            <button className="signup-button">JOIN FREE FOR A MONTH</button>
          </div>
          <div className="splash-card-1-img" />
        </div>
      </div>;
  }
  
}

export default Greeting;
