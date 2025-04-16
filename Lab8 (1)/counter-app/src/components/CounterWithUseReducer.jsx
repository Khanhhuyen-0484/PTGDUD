import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

const CounterWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter use-reducer-counter">
      <h2>useReducer Counter</h2>
      <p>Count: {state.count}</p>
      <div className="button-group">
        <button className="increment" onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button className="decrement" onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button className="reset" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </div>
  );
};

export default CounterWithUseReducer;