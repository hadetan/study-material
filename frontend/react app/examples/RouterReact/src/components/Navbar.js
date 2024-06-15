import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about" state={{from: "hey"}}>About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/Pricing">Pricing</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar