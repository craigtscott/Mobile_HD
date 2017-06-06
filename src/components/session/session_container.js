import { connect } from 'react-redux';
import Session from './session';
import{ login, logout } from '../../actions/session_action';

const mapStateToProps = ({session}) => {
  return{
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {processForm: user => dispatch(login(user))};

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
