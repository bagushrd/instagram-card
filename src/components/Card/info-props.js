import React from 'react';

export default class CardInfo extends React.Component {
  render () {
    return (
      <div className="card-info">
        <div className="card-icons">
          <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
          <span><i className="fa fa-comment-o" aria-hidden="true"></i></span>
        </div>
        <div className="card-icons-info">
          <span>{this.props.likes} {this.props.likesText}</span>
        </div>
      </div>
    )
  }
}
