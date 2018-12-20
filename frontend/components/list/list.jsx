import React from "react";
import { Link } from "react-router-dom";

const List = props => (
  <Link to={`/list/${props.list.id}`}>
    <div className="list">

      <div className="list-title">{props.list.title}</div>
          
    </div>
  </Link>
);

export default List;
