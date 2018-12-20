import React from 'react';


class List extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchList(this.props.match.params.listId);
  }


  render() {
    
    return (
      <div>
        HI
      </div>
    );
  }
}

export default List;
