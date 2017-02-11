import { connect } from 'react-redux';
import SessionSignup from './signup';
import{ signup } from '../../actions/session_action';

const mapStateToProps = ({session}) => {
  return{
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  debugger;
  return {processForm: user => dispatch(signup(user))};

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionSignup);
