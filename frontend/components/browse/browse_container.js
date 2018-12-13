import {
  connect
} from "react-redux";
import React from "react";
import Browse from "./browse";
import {logout} from "../../actions/session_actions";


const mapStateToProps = () => {
  return {
   
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(Browse);
