import React from 'react';


class MovieGenreList extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    //this.props.fetchMovies();
  }

  render() {
    return (
      <div>
        {/* ======================================= */}

        <div className="contain">
          <div className="row">
            <div className="row__inner">
              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
                    alt=""
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>

              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg"
                    alt=""
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>

              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-3.jpg"
                    alt=""
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>

              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-4.jpg"
                    alt=""
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>

              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-5.jpg"
                    alt=""
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================= */}
      </div>
    );
  }
}

export default MovieGenreList;
