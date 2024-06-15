import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Profile() {

  const params = useParams();

  useEffect(() => {
    
  }, [params])

  return (
    <div>
      <h1>Profile of {params.userId}</h1>
    </div>
  )
}

export default Profile