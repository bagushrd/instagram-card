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
        <CardTitle
          image={this.props.userImage}
          name={this.props.username}
        />

        <CardImage image={this.props.cardImage} />

        <CardInfo
          likes={this.props.totalLikes}
          likesText={this.props.totalLikesText}
          setFocusComment={this.props.setFocusComment}
          cardIndex={this.props.cardIndex}
        />

        <CardCaption
          name={this.props.username}
          caption={this.props.caption}
          comment={this.props.commentText}
          commentIndex={this.props.commentIndex}
          cardIndex={this.props.cardIndex}
          cardTime={this.props.cardTimePass}
        />

        <CardComment
          commentIndex={this.props.commentIndex}
          cardIndex={this.props.cardIndex}
          setComment={this.props.setComment}
        />
      </div>
    )
  }
}
