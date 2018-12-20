import React from "react";
import { Link } from "react-router-dom";

const ListTile = props => {

  
  return(
  <div>
    <Link to={`/lists/${props.list.id}`}>
      <div className="list">
        <div className="list-title">{props.list.title}</div>
      </div>
    </Link>
  </div>);
};

export default ListTile;
