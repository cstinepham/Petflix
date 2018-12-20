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
            <label className="modal-btn" htmlFor="modal-toggle">
              <strong>+</strong>
            </label>
            <label className="modal-backdrop" htmlFor="modal-toggle" />
            <div className="modal-content">
              <label className="modal-close" htmlFor="modal-toggle">
                &#x2715;
              </label>
              <div className="create-list">Create New Movie List</div>  <hr />

              <form>
                <input className="title-input" type="text" placeholder="ex. Good Crying Favs"/>
                <br></br>
                
              <input className="modal-content-btn" htmlFor="modal-toggle" type="submit" value="Submit"/>
   
                      
              </form>
{/*            
              <label className="modal-content-btn" htmlFor="modal-toggle">
                OK
              </label> */}
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
