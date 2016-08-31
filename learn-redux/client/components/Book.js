import React from 'react';

import Entry from './Entry'

import css from '../styles/style.styl';

const Book = React.createClass({
  render() {
    return (
      <div className='book'>
        <div className='entry-wrapper'>
          {this.props.data.entries.map((entries, i) => <Entry key={i} i={i} entry={entries} />)}
        </div>
      </div>
    )
  }
})

export default Book;
