import React, { Component } from "react";
import '../Navbar/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";




const NavBar = () => {

    return (
        
      <nav className="NavBar navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
       
       
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Who</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">What</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Templates</a></li>
            <li><a class="dropdown-item" href="#">Customization</a></li>
            <li><a class="dropdown-item" href="#">Social Medias</a></li>
          </ul>
        </li>
      
        <li> <a class="navbar-brand" href="#"><FontAwesomeIcon icon= {faShoppingCart}> </FontAwesomeIcon>10</a></li>
        
        

      </ul>
          
          </div>
          
       
    </div>
</nav>

      );


};

export default NavBar;