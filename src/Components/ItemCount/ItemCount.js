import React, { useState } from "react";



const ItemCount = ({stock , initial}) => {

  const [counter, setearContador] = useState(parseInt(initial));
  
 
  var stock = 10;

  const onAdd = () => {
    if (counter < stock){
    setearContador(counter + 1) ;}

    else{
    return alert("no queda mas stock")
    }
    

  };

  const handleCounterDown = () => {
    if(counter >0){
    setearContador(counter - 1) ;}
    else{
      return alert("no puedes quitar mas productos del carrito")
    }
    
   
  };

  

    return (        
          <div className="CounterSection">
                <p>Stock: {stock}</p>
                <p>Contador: {counter}</p>
                  <div className="btn-section">
                    <button onClick={onAdd}>Incrementar</button> 
                    <button onClick={handleCounterDown}>Decrementar</button> 
                  </div>
          </div> 
    );
}


export default ItemCount;



