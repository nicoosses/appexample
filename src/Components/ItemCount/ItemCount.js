import React, { useState } from "react";


const ItemCount = (props) => {

  const [counter, setearContador] = useState(props.initial);
  
  

  const addItem = () => {
    if (counter < props.stock){
    setearContador(counter + 1) ;}

   
    

  };

  const handleCounterDown = () => {
    if(counter > 0){
       setearContador(counter - 1) ;}
    
   
  };

  

    return (        
          <div className="CounterSection">
                <p>Stock: {props.stock}</p>
                
                  <div className="btn-section">
                    <button onClick={handleCounterDown}>-</button> 
                    <p>{counter}</p>
                    <button onClick={addItem}>+</button> 
                  </div>

                  <div>
                    <button className="AddtoCart" onClick={() => props.onAdd(counter)}>Agregar al carrito</button>
                    <p>Stock disponible: {props.stock}</p>
                  </div>
          </div> 
    );
}


export default ItemCount;



