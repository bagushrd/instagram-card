import React from 'react'
import { connect } from 'react-redux'
import { setFocusComment, setComment } from '../actions'
import Card from '../components/Card'

let cardList = [
  {
    userImage: "http://localhost:3000/images/9gag.jpg",
    username: "bagus",
    cardImage: "http://localhost:3000/images/9gag-image.jpg",
    totalLikes: "10",
    totalLikesText: "likes",
    caption: "Live smarter every single day",
    cardTimePass: "9 hours"
  },
  {
    userImage: "http://localhost:3000/images/9gag2.jpg",
    username: "herdiawan",
    cardImage: "http://localhost:3000/images/9gag-image2.jpg",
    totalLikes: "321",
    totalLikesText: "likes",
    caption: "Coming soon...",
    cardTimePass: "15 hours"
  }
]

class CardContainer extends React.Component {
  render() {
    return (
      <div>
        {cardList.map((cardProps, index) => {
          return (
            <Card
              key={index}
              cardIndex={index}
              {...cardProps}
              {...this.props}
            />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { cards } = state
  const { commentIndex, commentText } = cards
  return {
    commentIndex,
    commentText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFocusComment: (commentIndex) => {
      dispatch(setFocusComment(commentIndex))
    },
    setComment: (commentIndex, commentText) => {
      dispatch(setComment(commentIndex, commentText))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)
