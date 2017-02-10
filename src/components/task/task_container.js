import { connect } from 'react-redux';
import Task from './task';
// import{ fetchAllTasks } from '../../actions/task_action';

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getTasks: (id) => dispatch(fetchAllTasks(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
