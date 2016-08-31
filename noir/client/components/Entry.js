import React from 'react';
import { Link } from 'react-router';

import css from '../styles/style.styl';

const Entry = React.createClass({
  render() {
    const { entry, i, body_text, replies } = this.props;

    return(
      <div className='entry--entry'>
        <div className='entry--body-text'>
          <Link to={`/view/${entry.id}`}>
            <h1>{entry.title}</h1>
          </Link>
          <p>{entry.body_text}</p>
        </div>
      </div>
    )
  }
})

export default Entry;
