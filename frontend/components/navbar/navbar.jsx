import React from 'react';


class NavBar extends React.Component {


  render() {
    return <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo" />
          <div className="navbar-home-link">
            Home
            </div>
          <div className="navbar-recentlyadded-link" >
            Recently Added
          </div>
          <div className="navbar-comingsoon-link" >
            Coming Soon
          </div>

        </div>

        <div className="navbar-right">
          <div className="navbar-profile-pic" />
        </div>
      </div>;
  }
}

export default NavBar;
