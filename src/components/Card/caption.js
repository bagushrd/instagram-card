import React from 'react';

export default class CardCaption extends React.Component {
  render () {
    return (
      <div>
        <div className="card-caption">
          <span className="card-username">{this.props.name}</span>
          <span className="card-caption-text">{this.props.caption}</span>
        </div>
        <div className="card-time">
          <span>{this.props.cardTime}</span>
          <div className="card-time-separator"></div>
        </div>
      </div>
    )
  }
}
