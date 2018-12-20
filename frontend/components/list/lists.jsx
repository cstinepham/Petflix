import React from 'react';
import ListTile from "./list_tile";
import { LOGOUT_CURRENT_USER, logoutCurrentUser } from '../../actions/session_actions';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      user_id: this.props.currentUser
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.createList(this.state);
    
  }

  componentDidMount() {
    this.props.fetchLists();
  }

  render() {

    
    let lists = this.props.lists.map(list => {
      return <ListTile list={list} key={list.title} />;
    });


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
              <div className="create-list">Create New Movie List</div> <hr />
              <form onSubmit={this.handleSubmit}>
                <input className="title-input" type="text" placeholder="ex. Holiday Favorites" onChange={this.update("title")} value={this.state.title} />
                <br />
              
              {/* <label className="modal-content-btn" htmlFor="modal-toggle">
                  <input  type="submit" value="Submit" />
                </label> */}

                {/* <input type="submit" className="modal-content-btn" htmlFor="modal-toggle"/> */}
                <button type="submit" className="modal-content-btn-outer">

                <label className="modal-content-btn" htmlFor="modal-toggle">
                  Submit
                </label>

                </button>
              </form>
              
            </div>
          </div>

          {lists}
        </div>
      </div>;
  }
}




export default Lists;
