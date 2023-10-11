import React, { useState } from 'react';
import './App.css';
import CustomButton from './Button';



function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <CustomButton onClick={incrementCount} label="Increment" />
      <CustomButton onClick={decrementCount} label="Decrement" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
