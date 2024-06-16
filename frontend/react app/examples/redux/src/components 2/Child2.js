import React from 'react'
import { useSelector } from 'react-redux'

function Child2() {
  const message = useSelector(state => state.MsgReducer.msg)
  return (
    <div>
      The data from child1 is: {message}
    </div>
  )
}

export default Child2