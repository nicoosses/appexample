import React from 'react';
import '../Header/Header.css';
import banner from '../Header/Banner.png';


const Header = (prop) => {

    return (
        <div className="Header">
                <img src={banner} alt="banner Ecommerce" width="90%" />
        </div>
    )
}

export default Header
