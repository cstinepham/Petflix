import React from 'react';


class Lists extends React.Component {
  constructor(props) {
    super(props);

  }



  componentDidMount() {}

  render() {
    return <div>
        <div className="my-lists">My Lists</div>
        <div className="grid-container">

        <div className="modal-container">
          <input id="modal-toggle" type="checkbox" />
          <label className="modal-btn" htmlFor="modal-toggle">+</label>
          <label className="modal-backdrop" htmlFor="modal-toggle"></label>
          <div className="modal-content">
            <label className="modal-close" htmlFor="modal-toggle">&#x2715;</label>
            <h2>Create List</h2>
            <p>Hello from inside the modal!</p>
            <label className="modal-content-btn" htmlFor="modal-toggle">OK</label>
          </div>
        </div>  

          
          <div className="list" />
          <div className="list" />
          <div className="list" />
        </div>




      </div>;
  }
}




export default Lists;
