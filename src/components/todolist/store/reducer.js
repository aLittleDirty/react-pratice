import * as actionTypes from './constants'

export const todolist = (state=[], action) => {
  switch(action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case actionTypes.DELETE_TODO:
      return state.filter((item) => {
        return item.id !== action.id
      })
    case actionTypes.EDIT_TODO:
      return state.map((item) => {
        if(item.id === action.id)  {
          return {...item, text: action.text}
        }
        return item
      })
    case actionTypes.TOGGLE_TODO:
      return state.map((item) => {
        if(item.id === action.id) {
          return {...item, completed: !item.completed}
        } else {
          return item
        }
      })
    case actionTypes.TOGGLE_ALL:
      return state.map((item) => {
        return {...item, completed: action.completed}
      })
    default:
      return state;
  }
}

export const currentStatus = (state = 'all', action) => {
  switch (action.type) {
    case actionTypes.SET_ALL || actionTypes.SET_DONE || actionTypes.SET_UNDO: 
      return action.status
    default:
      return state;
  }
}
