import React from 'react';
import { Link } from 'react-router';

import css from '../styles/style.styl';

const Reply = React.createClass({
  render() {
    const { reply, i, body_text } = this.props;

    return(
      <div className='book--reply'>
        <div className='book--body-text'>
          <h1>{reply.title}</h1>
          <h3>
            <Link to={`/view/${reply.link}`} />
          </h3>
          <p>{reply.body_text}</p>
        </div>
      </div>
    )
  }
})

export default Reply;
