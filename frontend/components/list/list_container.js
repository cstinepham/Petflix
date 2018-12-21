import {connect} from 'react-redux';
import List from './list';
import {fetchList} from '../../actions/list_actions';
import {fetchMovies} from '../../actions/movie_actions'
import {fetchListItems} from '../../actions/list_item_actions'
import {selectListItemsByList, selectMoviesByListItems} from '../../reducers/selectors'

const mapStateToProps = (state, ownProps) => {
  let listId = ownProps.match.params.listId;
  let list = state.entities.lists[listId];

  let listItemsArray = Object.values(state.entities.listItems);
  let listItems = selectListItemsByList(listItemsArray, list);
  let movies = Object.values(state.entities.movies);
  return ({
    movies: selectMoviesByListItems(movies, listItems)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchList: (id) => dispatch(fetchList(id)),
  fetchMovies: () => dispatch(fetchMovies()),
  fetchListItems: () => dispatch(fetchListItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
