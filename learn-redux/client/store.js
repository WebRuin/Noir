import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import root reducer
import rootReducer from './reducers/index'

// Import data
import books from './data/books';
import entries from './data/entries';
import replies from './data/replies';

// Create default object for the data
const defaultState = {
  books,
  entries,
  replies
};

// The Store
const store = createStore(rootReducer, defaultState);

// History Stuff
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
