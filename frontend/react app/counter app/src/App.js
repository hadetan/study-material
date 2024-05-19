import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const increament = () => {
    setCount(count + 1)
  };
  const decreament = () => {
    setCount(count - 1)
  };
  const multiply = () => {
    setCount(count * count)
  }

  return (
    <>
    <div id='counter'>
      <h1>Counter App</h1>
      <p>{count}</p>
      <div id='button'>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>
        <button onClick={multiply}>x</button>
      </div>
    </div>
    </>
  );
}

export default App;
