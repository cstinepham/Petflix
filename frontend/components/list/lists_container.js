import { connect } from 'react-redux';
import Lists from './lists';
import { fetchLists, createList, deleteList } from '../../actions/list_actions';

const mapStateToProps = (state) => {
  let lists = Object.values(state.entities.lists);
  return ({
    lists: lists,
    currentUser: state.session.id
  });
};

const mapDispatchToProps = dispatch => ({
  fetchLists: () => dispatch(fetchLists()),
  createList: (list) => dispatch(createList(list)),
  deleteList: (listId) => dispatch(deleteList(listId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
