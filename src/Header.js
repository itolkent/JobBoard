import React from 'react';
import logo from './img/itol.png'
const Header = () => {
    return (
        <header>
            <img className='logo-container' src={logo} alt="logo" />
            <h1>Job Board</h1>
        </header>
    );
};

export default Header;
