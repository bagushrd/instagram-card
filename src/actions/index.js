export const setFocusComment = (commentIndex) => {
  return {
    type: 'SET_FOCUS_COMMENT',
    commentIndex
  }
}

export const setComment = (commentIndex, commentText) => {
  return {
    type: 'SET_COMMENT',
    commentIndex,
    commentText
  }
}
