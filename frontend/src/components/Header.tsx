import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to={'/my-floor'}>My Floor</Link>
      <Link to={'/rent-data'}>Rent Data</Link>
      <Link to={'/building-details'}>Add Floor</Link>
      <Link to={'/floor-summary'}>View Floor Details</Link>
    </div>
  )
}

export default Header
