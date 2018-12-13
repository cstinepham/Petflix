import React from 'react';

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
      <h1> welcome to netflixs browse page </h1>
        <button onClick={this.handleSubmit}>
          Logout
        </button>
    </div>
    );
  }
}

export default Browse;
