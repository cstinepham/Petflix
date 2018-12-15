import React from 'react';


class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

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
          <div className="navbar-profile-pic" />
          
          
          {/* ========================== */}
          
            <div>
              <button onClick={this.showMenu}>
                Show menu
            </button>

              {
                this.state.showMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <button> Menu item 1 </button>
                      <button> Menu item 2 </button>
                      <button> Menu item 3 </button>
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
