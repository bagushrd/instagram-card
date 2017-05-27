import React from 'react';

export default class CardComment extends React.Component {
  render () {
    return (
      <div className="card-comment">
        <input type="text" placeholder="Add a comment..." autoFocus={this.props.focus} />
      </div>
    )
  }
}
