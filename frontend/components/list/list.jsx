import React from 'react';
import NavBar from '../navbar/navbar';

class List extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
  
    return (
      <div className="list-overall">
        <NavBar/>
      </div>
    );
  }
}

export default List;
