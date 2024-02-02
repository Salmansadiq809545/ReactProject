import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <div>
        <img src="logo192.png" alt="dd" />
        </div>
 <div className='input'>
    <input type="text" />
 </div>
     <div className='navbar'>
        <Link to='/login'>HOME</Link>
        <Link to='/'>HOME</Link>
        <Link to='/'>HOME</Link>
        <Link to='/'>HOME</Link>
        <Link to='/'>HOME</Link>
        <Link to='/'>HOME</Link>
       
     </div>
    </nav>
  )
}   

export default Navbar
