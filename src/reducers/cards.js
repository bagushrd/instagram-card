const initialState = {
  commentIndex: undefined,
  commentText: undefined
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
        commentIndex
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
