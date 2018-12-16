import React from 'react';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  handleLogout(e) {
    e.preventDefault()
    this.props.logout();
  }


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
        <div className="navbar-comingsoon-link" >
          My List
          </div>

        </div>

        <div className="navbar-right">
          <div className="navbar-profile-pic" onClick={this.showMenu} />
          
          
          {/* ========================== */}
          
            <div>
              {
                this.state.showMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <div onClick={this.handleLogout} className="logout-link">
                      Logout
                      </div>   
                    </div>
                  )
                  : (
                    null
                  )
              }
            </div>

          
          
          {/* ========================== */}



        </div>
      </div>;
  }
}

export default NavBar;
