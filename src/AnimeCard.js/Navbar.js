import React from 'react';

const Navbar = (props) =>{
    const styles = {
        backgroundColor : props.darkMode ? "blue":"yellow",
        color: props.darkMode ? "black": "white"
    }
    return(
        <nav style={styles} className="tc">
            <img src="./images/favicon.ico"alt="logo" className="icon"/>
            <h3>My anime Journal</h3>
        </nav>
    );
}
export default Navbar;