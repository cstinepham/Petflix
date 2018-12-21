import React from "react";
import { Link } from "react-router-dom";

const ListTile = props => {

  
  return(
  <div>
    <Link to={`/lists/${props.list.id}`}>
      <div className="list">

          {/* ========== */}
          <div className="dropdown">
            
            <div className='list-actions-button'/>
            <ul className="dropdown-menu">
              <li>
                <button>Delete</button>
              </li>
              <li>
                <button>Edit</button>
              </li>
            </ul>
          </div>  
          {/* ============== */}


        <div className="list-title">{props.list.title}</div>
      </div>
    </Link>
  </div>);
};

export default ListTile;



{/* <div className="dropdown">
  <div className="navbar-profile-pic" />
  <ul className="dropdown-menu">
    <li>
      <button>Account</button>
    </li>
    <li>
      <button onClick={this.handleSubmit}>Logout</button>
    </li>
  </ul>
  <div className="dropdown-carrot" />
</div> */}