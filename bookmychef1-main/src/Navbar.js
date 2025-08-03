import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <h1>h1</h1>
      <ul>
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/About"}><li>About Us</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
