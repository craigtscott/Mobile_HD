import { connect } from 'react-redux';
import List from './list';
import{ fetchAllLists } from '../../actions/list_actions';

const mapStateToProps = state => {
  return {
    lists: state.lists,
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLists: () => dispatch(fetchAllLists())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
