import React, { Component } from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import './NavBar.css'


const Nav = () => {
    return (
        
        <nav className="NavBar">
            <ul>
                <Link to="/" className="li">
                  Home
                </Link>
                <Link to="/about" className="li">
                  About
                </Link>
                <Link to="/contact" className="li">
                  Contact
                </Link>
                <Link to="/shop">
                  <CartWidget contador="10"/>
                </Link>
            </ul>
        </nav>
      );
};

export default Nav;