
import './App.css';
import {createStore} from 'redux';
import allReducers from './reducers/index'
import { Provider } from 'react-redux';
import Homepage from './components/Homepage';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Homepage/>
    </div>
    </Provider>

  );
}

export default App;
