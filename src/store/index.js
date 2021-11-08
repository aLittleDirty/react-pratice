import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducer'
import thunk from "redux-thunk";

// 中间件
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);                   

// 本地缓存
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
// createStore本质上是一个reducer，累加器，将三个参数对象依次累加成最终的状态？
const store = createStore(reducer, { todolist: loadState()}, composeEnhancers(applyMiddleware(thunk)))
// const store = createStore(reducer, { todolist: loadState()})

window.onbeforeunload = (e) => {
  const wholeState = store.getState()
  saveState(wholeState.todolist)
}

export default store;