import React from 'react';
import { Link } from "react-router-dom";

class Greeting extends React.Component {


  render() {
    return <div className="splash-background">
        <div className="splash-navbar">
          <div className="splash-logo" />
          <Link to="/login" className="login-button">
            Sign In
          </Link>
        </div>

        <div className="splash-card">
          <div className="splash-card-1-text">
            <h1>Watch on any device</h1>
            <p>
              Stream on your phone, tablet, laptop, and TV without paying
              more.
            </p>
            <Link className="signup-button" to="/signup">
              JOIN FREE FOR A MONTH
            </Link>
          </div>
          <div className="splash-card-1-img" />
        </div>

        <div className="splash-card">
          <div className="splash-card-2-img" />
          <div className="splash-card-2-text">
            <h1>Download and go</h1>
            <p>
              Save your data, watch offline on a plane, train, or submarine…
            </p>
            <Link className="signup-button-2" to="/signup">
              TAKE US ANYWHERE
            </Link>
          </div>
        </div>

        <div className="splash-card">
          <div className="splash-card-3-text">
            <h1>No pesky contracts</h1>
            <p>Join today, cancel anytime.</p>
            <Link className="signup-button-3" to="/signup">
              TRY WITHOUT COMMITTING
            </Link>
          </div>
          <div className="splash-card-3-img" />
        </div>
      </div>;
  }
}

export default Greeting;
