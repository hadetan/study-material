import React, { useState } from 'react'

function Child1(props) {
  
  const [child1Count, setChild1Count] = useState(0);

  const updateChildCount = () => {
    setChild1Count(child1Count + 1);
    props.updateParentCount(child1Count + 1);
  }

  const decrementCounts = () => {
    setChild1Count(child1Count - 1);
    props.updateParentCount(child1Count - 1)
  }

  return (
    <>
      <p>Child Count: {child1Count}</p>
      <button onClick={updateChildCount}>+</button>
      <button onClick={decrementCounts}>-</button>
    </>
  )
}

export default Child1