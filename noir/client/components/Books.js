import React from 'react';
import { Link } from 'react-router';
import Book from './Book';

const Books = React.createClass({
  render() {
    return (
      <div>
        {this.props.data.books.map((book, i) => <Book {...this.props} key={i} i={i} page={book} />)}
      </div>
    )
  }
})

export default Books;
