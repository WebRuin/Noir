import React from 'react';
import { Link } from 'react-router';
import Book from './Book';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1> <Link to='/'>Knights Nior</Link> </h1>
        <h2> Sharable intimate sexual diaries </h2>
        {this.props.data.books.map((book, i) => <Book {...this.props} key={i} i={i} page={book} />)}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})

export default Main;
