import React from 'react';
import { Link } from 'react-router-dom';

const StyledNavbar =() =>{
    return(
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='profile'>Profile</Link>
        </nav>
    )
}

export default StyledNavbar;