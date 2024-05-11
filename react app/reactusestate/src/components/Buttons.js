import React, { useContext } from 'react'
import { myContext } from '../App'


const Buttons = () => {
  const data = useContext(myContext)
  return (
    <div style={{backgroundColor: data.color}}>
      <p>color</p>
    </div>
  )
}

export default Buttons
