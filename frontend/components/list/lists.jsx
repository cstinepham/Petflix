import React from 'react';
import List from "./list";


class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      user_id: 15
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
      return <List list={list} key={list.title} />;
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
              <label className="modal-close" htmlFor="modal-toggle">&#x2715;</label>
              <div className="create-list">Create New Movie List</div>  <hr />
              
              
              
            <form onSubmit={this.handleSubmit}>
                <input className="title-input" type="text" placeholder="ex. Holiday Favorites"
                        onChange={this.update("title")}
                        value={this.state.title}/>
                <br></br>  
                <input className="modal-content-btn" type="submit" value="Submit"/>
              </form>
              {/*            
              <label className="modal-content-btn" htmlFor="modal-toggle">
                OK
              </label> */}
            </div>
          </div>



          {lists}
          
        </div>
      </div>;
  }
}




export default Lists;
