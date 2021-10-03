import React from 'react'
import { FontAwesomeIcon , tag } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


export const CartWidget = (props) => {
    return (
        <div>
           <a> <FontAwesomeIcon icon= {faShoppingCart}></FontAwesomeIcon> {props.contador}  </a>
        </div>
    )
}
