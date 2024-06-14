import React, { useState } from 'react'

function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(!isLoggedIn);
    }

  return (
    <div>
        {isLoggedIn ? <p>Welcome Back!</p> : <p>Please Log In.</p>}
        <button onClick={login}>
            {isLoggedIn ? "Log Out" : "Log In"}
        </button>
    </div>
  )
}

export default Login