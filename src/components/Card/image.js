import React from 'react';

export default class CardImage extends React.Component {
  render () {
    return (
      <div className="card-image">
        <img src={this.props.image} alt="card" />
      </div>
    )
  }
}
