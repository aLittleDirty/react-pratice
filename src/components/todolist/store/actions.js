import * as actionTypes from './constants'
let nextTodoId = 0

// 在这里实现异步操作，获取异步数据
export const getTodo = () => {
  return (dispatch) => {
    setTimeout(() => {
      const action = addTodo('12345')
      dispatch(action)
    }, 1000)
  }
}


export const addTodo = (text) => ({
  type: actionTypes.ADD_TODO,
  id: nextTodoId++,
  text
})

export const deleteTodo = (id) => ({
  type: actionTypes.DELETE_TODO,
  id
})

export const editTodo = (text, id) => ({
  type: actionTypes.EDIT_TODO,
  text,
  id
})

export const toggleTodo = (id) => ({
  type: actionTypes.TOGGLE_TODO,
  id
})


export const toggleAll = (completed) => ({
  type: actionTypes.TOGGLE_ALL,
  completed
})

export const setAll = () => ({
  type: actionTypes.SET_ALL,
  status: 'all'
})

export const setDONE = () => ({
  type: actionTypes.SET_ALL,
  status: 'done'
})

export const setUNDO = () => ({
  type: actionTypes.SET_ALL,
  status: 'undo'
})