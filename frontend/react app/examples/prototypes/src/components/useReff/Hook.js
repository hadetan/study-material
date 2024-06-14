import React, { useEffect, useRef, useState } from 'react'

function Hook() {

    const [count, setCount] = useState(0);
    const refCounter = useRef(0);

    useEffect(() => {
      console.log("State count", count);
      console.log("Normal counter", counter);
      console.log("ref counter", refCounter.current)
    });

    let counter = 0

    const increment = () => {
      setCount(count + 1);
      counter++;
      refCounter.current = refCounter.current + 1;
    }

  return (
    <div>
        <p>{count} {counter}</p>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Hook;