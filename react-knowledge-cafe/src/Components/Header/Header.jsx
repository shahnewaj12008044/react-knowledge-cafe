import React from 'react';
import img from '../../assets/images/profile.png'
import './Header.css'

const Header = () => {
    
    return (
        <div className="nav-bar">
            <h2>Coders Bd</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default Header;