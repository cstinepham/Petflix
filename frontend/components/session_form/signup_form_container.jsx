import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, clearErrors, login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign Up",
    navLink: <Link to="/login">Already have an account? Sign In</Link>
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  demoLogin: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
