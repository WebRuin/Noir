import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browerHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// CSS
import css from './styles/style.styl';

// Components
import App from './components/App';
import Entry from './components/Entry';
import Book from './components/Book';
import Reply from './components/Reply';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Book}></IndexRoute>
        <Route path='/view/:entryId' component={Entry}></Route>
        <Route path='/view/:replyId' component={Reply}></Route>
      </Route>
    </Router>
  </Provider>
)

// Render the layout
render(router, document.getElementById('root'));
