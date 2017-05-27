import React from 'react';

export default class CardCaption extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  componentWillReceiveProps(nextProps, prevProps) {
    if (this.props.cardIndex === nextProps.commentIndex && nextProps.comment !== null) {
      this.setState((prevState) => {
        prevState.comments.push(nextProps.comment)
        return {
          comments: prevState.comments
        }
      })
    }
  }

  render () {
    return (
      <div>
        <div className="card-caption">
          <span className="card-username">{this.props.name}</span>
          <span className="card-caption-text">{this.props.caption}</span>
        </div>
        {this.state.comments.map((comment, index) => {
          return (
            <div key={index} className="card-caption">
              <span className="card-username">{'me'}</span>
              <span className="card-caption-text">{comment}</span>
            </div>
          )
        })}
        <div className="card-time">
          <span>{this.props.cardTime}</span>
          <div className="card-time-separator"></div>
        </div>
      </div>
    )
  }
}
