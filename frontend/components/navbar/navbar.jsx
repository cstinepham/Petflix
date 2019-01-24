import React from 'react';
import { Link } from "react-router-dom";
import SearchBarContainer from '../search/search_bar_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {


    
    if (this.props.currentUser === undefined) {
      return null;
    }

    return <div className="navbar">
        <div className="bg transition"></div>
        <div className="navbar-left">

        <Link to={`/browse`}>
          <div className="navbar-logo" />
        </Link>
          
        <Link to={`/browse`}>
          <div className="navbar-home-link">Home</div>
        </Link>

        <Link to={`/lists`}>
          <div className="navbar-comingsoon-link">My Lists</div>
        </Link>
        </div>

        <div className="navbar-right">
          
        {/* ======= SEARCH ===== */}
        <SearchBarContainer/>
          
          {/* ======= DROPDOWN ===== */}
          <div className="dropdown">
            <div className="navbar-profile-pic" />
            <ul className="dropdown-menu">
              <li>
                <button>Account</button>
              </li>
              <li>
                <button onClick={this.handleSubmit}>Logout</button>
              </li>
            </ul>
            <div className="dropdown-carrot" />
          </div>
          <div />
        </div>
      </div>;
  }
}

export default NavBar;
