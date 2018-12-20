import {connect} from 'react-redux';
import List from './list';
import {fetchList} from '../../actions/list_actions';
import {fetchMovies} from '../../actions/movie_actions'


const mapStateToProps = (state, ownProps) => {
  let listId = ownProps.match.params.listId;
  let list = state.entities.lists[listId];
  let movies = Object.values(state.entities.movies);
  return ({
    list: list,
    movies: movies
  });
};

const mapDispatchToProps = dispatch => ({
  fetchList: (id) => dispatch(fetchList(id)),
  fetchMovies: () => dispatch(fetchMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
