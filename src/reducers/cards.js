const initialState = {
  commentIndex: null,
  commentText: null
}

const cards = (state = initialState, action) => {
  let {
    type,
    commentIndex,
    commentText
  } = action

  switch (type) {
    case 'SET_FOCUS_COMMENT':
      return {
        ...state,
        commentIndex,
        commentText: null
      }
    case 'SET_COMMENT':
      return {
        ...state,
        commentIndex,
        commentText
      }
    default:
      return state
  }
}

export default cards
