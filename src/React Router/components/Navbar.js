import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to='/'>Home</Link>
      <Link to='About'>About</Link>
      <Link to='Contact'>Contact</Link>
      <Link to='Product'>Product</Link>
    </nav>
  )
}

export default Navbar