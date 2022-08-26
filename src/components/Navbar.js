import React from 'react';
import airbnb from '../images/airbnb.jpg'

const Navbar = () => {
    return(
        <nav>
            <img src={airbnb} alt="airbnb" />
            <p>airbnb</p>
        </nav>
    )
}

export default Navbar;