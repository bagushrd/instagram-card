import React from 'react';

export default class CardTitle extends React.Component {
  render () {
    return (
      <div className="title">
        <img src={this.props.image} className="title-image" alt="card-title" />
        <span className="title-text">{this.props.name}</span>
      </div>
    )
  }
}
