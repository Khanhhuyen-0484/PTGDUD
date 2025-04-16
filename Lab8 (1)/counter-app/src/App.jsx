import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CounterWithUseState from './components/CounterWithUseState';
import CounterWithUseReducer from './components/CounterWithUseReducer';
import CounterWithRedux from './components/CounterWithRedux';
import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>React Counter Examples</h1>
        <CounterWithUseState />
        <CounterWithUseReducer />
        <CounterWithRedux />
      </div>
    </Provider>
  );
};

export default App;