import { connect } from 'react-redux';
import List from './list';
import{ fetchAllLists, createList } from '../../actions/list_actions';
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
    getTasks: (id) => dispatch(fetchAllTasks(id)),
    createList: (list) => dispatch(createList(list)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
