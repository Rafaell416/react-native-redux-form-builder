const inputs = (state=[], action) => {
  switch (action.type) {
    case 'ADD_INPUT':
      return [
        ...state,
        {
          familyId: action.familyId,
          id: action.id,
          questionType: action.questionType,
          questionText: action.questionText,
          children: action.children
        }
      ]
    default:
      return state
  }
}

export default inputs
