import { connect } from 'react-redux';
import Lists from './lists';
import { fetchLists, createList } from '../../actions/list_actions';

const mapStateToProps = (state) => {
  let lists = Object.values(state.entities.lists);
  return ({
    lists: lists,
    currentUser: state.session.id
  });
};

const mapDispatchToProps = dispatch => ({
  fetchLists: () => dispatch(fetchLists()),
  createList: (list) => dispatch(createList(list))
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
