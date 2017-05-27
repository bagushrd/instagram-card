import React from 'react';
import classnames from 'classnames';

export default class CardInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heartClass: 'fa-heart-o blackGeneral',
      like: false,
      totalLikes: this.props.likes
    }
    this.likeThis = this.likeThis.bind(this);
  }

  likeThis() {
    this.setState((prevState) => {
      return {
        like: !prevState.like,
        totalLikes: this.calculateLikes(!prevState.like, parseInt(prevState.totalLikes, 10)),
        heartClass: (prevState.like) ? 'fa-heart-o black-general' : 'fa-heart red-heart'
      }
    })
  }

  calculateLikes(like, totalLikes) {
    return (like) ? totalLikes + 1 : totalLikes - 1;
  }

  render () {
    return (
      <div className="card-info">
        <div className="card-icons">
          <span onClick={this.likeThis}>
            <i className={classnames('fa', this.state.heartClass)} aria-hidden="true"></i>
          </span>
          <span onClick={() => this.props.setFocusComment(this.props.cardIndex)}>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
          </span>
        </div>
        <div className="card-icons-info">
          <span>{this.state.totalLikes} {this.props.likesText}</span>
        </div>
      </div>
    )
  }
}
