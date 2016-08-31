import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browerHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import 'babel-polyfill';

// Components
import App from './components/App';
import Books from './components/Books';
import Entry from './components/Entry';

// CSS
import css from './styles/style.styl';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Books}></IndexRoute>
        <Route path='/view/:bookId' component={Entry}></Route>
      </Route>
    </Router>
  </Provider>
)

// Render the layout
render(router, document.getElementById('root'));
