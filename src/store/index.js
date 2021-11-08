import { createStore } from "redux";
import reducer from './reducer'

const loadState = () => {
  try {
    const initState = localStorage.getItem('todolist')
    if(initState == null) {
      return undefined;
    } else {
      return JSON.parse(initState)
    }
  } catch (err){
    return undefined;
  }
}

const saveState = (state) => {
  localStorage.setItem('todolist', JSON.stringify(state))
}

// 第一个参数是数据树，第二个参数是初始化state（preloadedState)，可以理解为在初始化阶段有一个虚拟的action对其进行赋值
/* preloadState的注意事项
- 如果使用combineReducers()方法，指定preloadState的reducer会接收到对应的state，
  而其他的reducer将会接收到undefined，在接收到undefined后，将会获取reducer函数赋值的默认值
*/
const store = createStore(reducer, { todolist: loadState()})

window.onbeforeunload = (e) => {
  const wholeState = store.getState()
  saveState(wholeState.todolist)
}

export default store;