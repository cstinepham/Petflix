import React from 'react';
import NavBar from '../navbar/navbar';

class Browse extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.logout();
  }


  render() {
    return (
    <div>
      <NavBar/>

        <button onClick={this.handleSubmit}>
          Logout
        </button>
    </div>
    );
  }
}

export default Browse;
