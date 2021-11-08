import { Provider } from 'react-redux';
import store from './store/index'

import './App.css';
// import Context from './components/context/index'
import TicTacToe from  './components/tic-tac-toe/index'
import TodoList from './components/todolist/index'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Context></Context> */}
        <TicTacToe></TicTacToe>
        <TodoList></TodoList>
      </div>
    </Provider>
  );
}

export default App;
