import React, { useState } from "react";
import LoginComponent from '../components/orderComponent/LoginComponent';
import LogoutButton from '../components/orderComponent/LoginComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
export const HeaderComponent = () => {


    return (



<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://localhost:3000/">Products</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/customer/">profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/order">Ticket</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faCartShopping} /></a>
        </li>
      </ul>
      <span class="navbar-text">
      { <LoginComponent/>}
    
      
            {/* {imageUrl && <img src={imageUrl} alt="Foto del usuario" />}
            <p>Nombre: {name}</p> */}
      </span>
    </div>
  </div>
</nav>


    )

    
}

export default HeaderComponent;


