import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';

function App() {
  const [input, setInput] = useState('')
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <main>
    <div id='p1'>
      <input
      type='number'
      placeholder='enter a number'
      value={input}
      onChange={(event) => setInput(event.target.value)}
      />
      <button
      onClick={() => dispatch(incrementByAmount(+input))}
      >increment By Amount</button>
    </div>
    <div id='p2'>
      <button
      onClick={() => dispatch(increment())}
      >increment by 1</button>
      <span>{count}</span>
      <button
      onClick={() => dispatch(decrement())}
      >increment by 1</button>
    </div>
    </main>
  );
}

export default App;
