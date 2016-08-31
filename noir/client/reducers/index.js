import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import entries from './entries';
import books from './books';
import replies from './replies';

const rootReducer = combineReducers({ entries, books, replies, routing: routerReducer });

export default rootReducer
