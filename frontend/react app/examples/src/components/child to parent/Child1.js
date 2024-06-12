import React, { useState } from 'react'

function Child1(props) {
  
  const [countInChild1, setCountInChild] = useState(0);
  
  function updateCountInChild1() {
    setCountInChild(countInChild1 + 1);
    props.onCountUpdate(countInChild1 + 1)
  }

  return (
    <>
      <p>Inside child 1: {countInChild1}</p>
      <button onClick={updateCountInChild1}>increment</button>
    </>
  )
}

export default Child1