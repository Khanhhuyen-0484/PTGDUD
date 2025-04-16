import React, { useState } from 'react';

const CounterWithUseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter use-state-counter">
      <h2>useState Counter</h2>
      <p>Count: {count}</p>
      <div className="button-group">
        <button className="increment" onClick={() => setCount(count + 1)}>+</button>
        <button className="decrement" onClick={() => setCount(count - 1)}>-</button>
        <button className="reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default CounterWithUseState;