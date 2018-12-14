import {connect} from 'react-redux';
import NavBar from './navbar';

const mapStateToProps = ({
  session,
  entities: {
    users
  }
}) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
