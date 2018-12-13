import React from 'react';
import { Link } from "react-router-dom";

class Greeting extends React.Component {


  render() {
    return <div className="splash-background">
        <div className="splash-navbar">
          <div className="splash-logo" />
          <Link to="/login" className="login-button">Sign In</Link>
        </div>
        <div className="splash-card-1">
          <div className="splash-card-1-text">
            <h1>Watch on any device</h1>
            <p>
              Stream on your phone, tablet, laptop, and TV without paying
              more.
            </p>
            <Link className="signup-button" to="/signup">JOIN FREE FOR A MONTH</Link>
          </div>
          <div className="splash-card-1-img" />
        </div>
      </div>;
  }
}

export default Greeting;
