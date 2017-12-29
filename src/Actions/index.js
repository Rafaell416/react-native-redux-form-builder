import {v4} from 'uuid'

export const addInput = (questionText, questionType) => ({
  type: 'ADD_INPUT',
  familyId: v4(),
  id: v4(),
  questionText,
  questionType,
  children: []
})
