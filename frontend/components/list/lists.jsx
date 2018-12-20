import React from 'react';
import ReactDOM from "react-dom";


class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal () {
    this.setState({ show: true });
  }

  hideModal () {
    this.setState({ show: false });
  }

  componentDidMount() {}

  render() {
    return <div>
        <div className="my-lists">My Lists</div>
        <div className="grid-container">
          <div className="add-list">
            <button className="add-list-button" onClick={this.showModal}>+</button>
          </div>
          <div className="list" />
          <div className="list" />
          <div className="list" />
        </div>
      </div>;
  }
}




export default Lists;
