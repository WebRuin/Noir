import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pageActionCreators from '../actions/pageActionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    data: {
      books: state.books,
      entries: state.entries,
      replies: state.replies
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(pageActionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
