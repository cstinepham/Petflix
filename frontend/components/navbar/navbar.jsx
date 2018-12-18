import React from 'react';

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
    return <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo" />
          <div className="navbar-home-link">Home</div>
          <div className="navbar-recentlyadded-link">Recently Added</div>
          <div className="navbar-comingsoon-link">Coming Soon</div>
          <div className="navbar-comingsoon-link">My List</div>
        </div>

        <div className="navbar-right">
          
        {/* ======= SEARCH ===== */}
        <form>
          <input type="search" placeholder="Title"/>
        </form>

          
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
