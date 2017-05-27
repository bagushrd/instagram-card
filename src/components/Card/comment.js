import React from 'react';

export default class CardComment extends React.Component {
  constructor(props) {
    super(props)
    this.handleForm = this.handleForm.bind(this)
  }

  handleForm(event) {
    event.preventDefault()
    this.props.setComment(this.props.cardIndex, this.refInput.value)
    this.refInput.value = ''
  }

  componentWillReceiveProps(nextProps, prevProps) {
    if (this.props.cardIndex === nextProps.commentIndex) {
      this.refInput.focus()
    }
  }

  render () {
    return (
      <div className="card-comment">
        <form onSubmit={(e) => this.handleForm(e)}>
          <input type="text" placeholder="Add a comment..." ref={(input) => { this.refInput = input }} />
        </form>
      </div>
    )
  }
}
