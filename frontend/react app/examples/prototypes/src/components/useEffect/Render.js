import React, { useEffect, useState } from 'react'

function Render() {

  const [count, setCount] = useState(0);

  // Cleanup work here, as if there was a setInterval and when its been unmounted the clearInterval will be called from here.
  const callOnUnmount = () => {
    console.log("Unmounted");
  }
  

  useEffect(() => {

    console.log(count, "Counter updated");

    // return as a callback `() => {}` or calling back an existing function.
    return callOnUnmount;
  }, []);

  useEffect(() => {
    console.log("re-rendered")
  })

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Render;