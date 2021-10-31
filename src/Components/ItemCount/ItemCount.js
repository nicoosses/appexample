import React, { useState } from "react";


const ItemCount = ({initial, maxValue, minValue, onAdd}) => {

  const [counter, setearContador] = useState(initial);
  
  

  const decrementarStock = () => {
    if(counter === minValue){
      return alert("No puede pedir cantidades negativas")  ; 
    }   
    setearContador(counter-1);
    

  };

  
  const incrementarStock = () => {
    if (counter === maxValue){
      return alert("Cantidad maxima superada, comunicarse por ventas mayores");
    }
    setearContador(counter+1);
   

  };

    return (        
          <div className="CounterContainer">
            
                  <div className="CounterSection">
                    <button onClick={decrementarStock} className="Btn" onAdd={counter-1}>-</button> 
                    <p>{counter}</p>
                    <button onClick={incrementarStock} className="Btn" onAdd={counter+1}>+</button> 
                  
                  </div>


                  <div>
                     <p>Productos en Carrito: {counter}</p>
                     <button> COMPRAR </button>
                        <button> DESHACER </button>
                        <button> LIMPIAR CARRITO </button>
                  </div>
          </div> 
    );
}


export default ItemCount;



