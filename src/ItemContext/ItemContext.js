import React from 'react'
import { useState , createContext } from 'react'

export const pjContext = createContext();

export const PjProvider = ({ children }) => {

    const [pjCart, setPjCart] = useState ([]);


    const addItem = (addpj) => {

        const index = pjCart.findIndex((obj => obj.id === addpj.id));


        if(index < 0){
            setPjCart([...pjCart, addpj]);
        } 
         else{
             let quantityNew = parseInt(pjCart[index].quantity) + parseInt(addpj.quantity);
             pjCart[index].quantity = parseInt(quantityNew);
             setPjCart([...pjCart]);
         }

         console.log(pjCart);
         alert("Productos en el carrito:");
    }

    const removeItem = (key) => {

        const newDat = pjCart.filter(obj => obj.id !== key);
        setPjCart([...newDat]);
        
    }

    const clearItem = () => {

         setPjCart([]);
         
    }

    
  
    
    const [counter, setearContador] = useState(0);

    

    const decrementarStock = () => {
      if(counter === 0){
        return alert("No puede pedir cantidades negativas")  ; 
      }   
      setearContador(counter-1);
      
  
    };
  
    
    const incrementarStock = () => {
      if (counter === 10){
        return alert("Cantidad maxima superada, comunicarse por ventas mayores");
      }
      setearContador(counter+1);
     
  
    };


    return(

        <pjContext.Provider value={{pjCart,addItem,removeItem,clearItem,counter,decrementarStock,incrementarStock}}>
            {children}
        </pjContext.Provider>

    )

};
