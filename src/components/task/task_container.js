import { connect } from 'react-redux';
import Task from './task';
import{ fetchAllTasks } from '../../actions/task_actions';

const mapStateToProps = state => {
  return {
    task: state.lists,
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTasks: () => dispatch(fetchAllTaskss())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
