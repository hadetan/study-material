import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

  return (
    <>
        <p>Current value is: {count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </>
  )
}

export default Counter