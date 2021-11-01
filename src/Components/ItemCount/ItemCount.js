import React, { useState , useContext } from "react";
import { pjContext } from '../../ItemContext/ItemContext'


const ItemCount = ({stock, initial, onAdd }) => {

  const {decrementarStock} = useContext(pjContext);
  const {incrementarStock} = useContext(pjContext);
  const {counter} = useContext(pjContext);

  const { addItem } = useContext(pjContext);
  const { clearItem } = useContext(pjContext);
  

    return (        
          <div className="CounterContainer">
            
                  <div className="CounterSection">
                    <button onClick={(incrementarStock)} className="Btn" > Agregar al carrito </button> 
                    <p>{counter}</p>
                    <button  onClick={(decrementarStock)} className="Btn" > Deshacer</button> 
                  
                  </div>
 
                  <div>
                     <p>Productos en Carrito: {counter}</p>
                        <button onClick={(clearItem)}> LIMPIAR CARRITO  </button>
                         <button onClick={(addItem)}> COMPRAR  </button>
                  </div>
          </div> 
    );
}


export default ItemCount;



