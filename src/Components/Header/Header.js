import React from 'react';
import '../Header/Header.css';
import banner from '../Header/Banner.png';
import NavBar from "../Navbar/NavBar";
const Header = (props) => {

    return (
        <div className="Header">
                <NavBar/>
                <img src={banner} alt="banner Ecommerce" width="90%" />
        </div>
    )
}

export default Header
