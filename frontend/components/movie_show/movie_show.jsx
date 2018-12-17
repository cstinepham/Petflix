import React from 'react';
import NavBar from "../navbar/navbar";

class MovieShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
   this.props.fetchMovie(this.props.match.params.movieId);
  }

  render() {
    if (this.props.movie === undefined) return null;

    return (
      <div>
        <NavBar />
        <div className="videoContainer">
        <video className="movie-show" 
        src={this.props.movie.video} 
        autoplay="autoplay"
        controls/>
            
        </div>
      </div>
    );
  }
}

export default MovieShow;
