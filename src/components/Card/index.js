import React from 'react';
import CardTitle from './title';
import CardImage from './image';
import CardInfo from './info';
import CardCaption from './caption';
import CardComment from './comment';

export default class Card extends React.Component {
  render () {
    return (
      <div className="card-container">
        <CardTitle image={this.props.userImage} name={this.props.username} />
        <CardImage image={this.props.cardImage} />
        <CardInfo likes={this.props.totalLikes} likesText={this.props.totalLikesText} />
        <CardCaption name={this.props.username} caption={this.props.caption} cardTime={this.props.cardTimePass} />
        <CardComment />
      </div>
    )
  }
}
