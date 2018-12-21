import React from 'react';
import { Link } from "react-router-dom";

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
        
        <div className="videoContainer">
          <Link to='/browse'>
            <div className="back-button" />
          </Link>
          
          <video className="movie-show" 
          src={this.props.movie.video} 
          autoPlay
          controls/>
        </div>
      </div>
    );
  }
}

export default MovieShow;
