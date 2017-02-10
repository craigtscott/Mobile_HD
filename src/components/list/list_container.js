import { connect } from 'react-redux';
import List from './list';
import{ fetchAllLists } from '../../actions/list_actions';
import{ fetchAllTasks } from '../../actions/task_action';
const mapStateToProps = state => {
  return {
    lists: state.lists,
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLists: () => dispatch(fetchAllLists()),
    getTasks: (id) => dispatch(fetchAllTasks(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
