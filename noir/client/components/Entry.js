import React from 'react';
import { Link } from 'react-router';

import css from '../styles/style.styl';

const Entry = React.createClass({
  render() {
    const { entry, i, body_text } = this.props;

    return(
      <div className='entry--entry'>
        <div className='entry--body-text'>
          <h1>{entry.title}</h1>
          <h3>
            <Link to={`/view/${entry.link}`} />
          </h3>
          <p>{entry.body_text}</p>
        </div>
      </div>
    )
  }
})

export default Entry;
