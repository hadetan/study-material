import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "aquib") {
      navigate("/user/aquib")
    } else {
      navigate("/about")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </form>
    </div>
  )
}

export default Login