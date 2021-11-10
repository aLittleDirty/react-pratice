import { Provider } from 'react-redux';
import store from './store/index'

import './App.css';
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes/index';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <p>公共区域</p>
          {renderRoutes(routes)}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
