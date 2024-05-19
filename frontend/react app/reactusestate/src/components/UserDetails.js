import React, { useContext } from 'react'
import { myContext } from '../App'

const UserDetails = () => {
    const data = useContext(myContext)
  return (
    <div style={{backgroundColor: data.color}}>
      <p>my name is: {data.name}</p>
      {/* <p>color: {data.color}</p> */}
    </div>
  )
}

export default UserDetails
