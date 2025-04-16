import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/actions';

const CounterWithRedux = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="counter redux-counter">
      <h2>Redux Counter</h2>
      <p>Count: {count}</p>
      <div className="button-group">
        <button className="increment" onClick={() => dispatch(increment())}>+</button>
        <button className="decrement" onClick={() => dispatch(decrement())}>-</button>
        <button className="reset" onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default CounterWithRedux;