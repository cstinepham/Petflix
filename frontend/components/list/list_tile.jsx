import React from "react";
import { Link } from "react-router-dom";

class ListTile extends React.Component {

  handleDeleteList() {
    return (e) => {
      this.props.deleteList(this.props.list.id);
      e.preventDefault();

    }
  }

  render () {
      
      return <div>
      <Link to={`/lists/${this.props.list.id}`}>

        <div className="list" >

          {/* ====dropdown====== */}
          <div className="dropdown">
            <div className="list-actions-button" />
            <ul className="dropdown-menu">
              <li>
                <button onClick={ this.handleDeleteList() } >Delete</button>
              </li>
              <li>
                <button>Edit</button>
              </li>
            </ul>
          </div>
          {/* ============== */}

          <div className="list-title">{this.props.list.title}</div>
        </div>
      </Link>
    </div>;
  }
}



export default ListTile;
