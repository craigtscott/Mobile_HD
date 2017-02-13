import { connect } from 'react-redux';
import Task from './task';
import {fetchAllTasks,
        deleteTask,
        createTask,
        updateTask} from '../../actions/task_action';

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks,
    session: state.session,
    id: ownProps.id

  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTasks: (id) => dispatch(fetchAllTasks(id)),
    createTask: (task) => dispatch(createTask(task)),
    updateTask: (task) => dispatch(updateTask(task)),
    deleteTask: (id) => dispatch(deleteTask(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
