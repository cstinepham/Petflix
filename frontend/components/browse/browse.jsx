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

  componentDidMount() {
    
    this.props.fetchMovies();

  }

  render() {
    
    if (this.props.movies.length === 0) return null;

    return <div>
        <NavBar />
        <button onClick={this.handleSubmit}>Logout</button>
        <h1>{this.props.movies[0].title}</h1>
        <img src={this.props.movies[0].photo} />
      </div>;
  };
}

export default Browse;
