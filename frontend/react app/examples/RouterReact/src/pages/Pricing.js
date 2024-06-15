import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function Pricing() {

  const location = useLocation();

  return (
    <div>
      Show Pricing
      <nav>
        <Link to={`${location.pathname}/free`}>Free</Link>
        <Link to={`${location.pathname}/premium`}>Premium</Link>
        <Link to={`${location.pathname}/freemium`}>Freemium</Link>
        {/* Will be fixed later */}
      </nav>
      <Outlet />
    </div>
  )
}

export default Pricing