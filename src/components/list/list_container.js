import { connect } from 'react-redux';
import List from './list';
import{ fetchAllLists, createList, updateList, deleteList } from '../../actions/list_actions';
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
    getTasks: (rowData) => dispatch(fetchAllTasks(rowData)),
    createList: (list) => dispatch(createList(list)),
    updateList: (list) => dispatch(updateList(list)),
    deleteList: (id) => dispatch(deleteList(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
