import React from 'react'
import { useState , createContext } from 'react'

export const pjContext = createContext();

export const PjProvider = ({ children }) => {

    const [pjCart, setPjCart] = useState ([]);


    const addItem = () => {

        if(index < 0){
            setPjCart([...pjCart, addpj]);
        } 
         else{
             let quantityNew = parseInt(pjCart[index].quantity) + parseInt(addpj.quantity);
             pjCart[index].quantity = parseInt(quantityNew);
             setPjCart([...pjCart]);
         }

    }

    const removeItem = () => {

        const newDat = pjCart.filter(obj => obj.id != key);
        setPjCart([...newDat]);
        
    }

    const clearItem = () => {

         setPjCart([]);
         
    }

    
 


    return(

        <pjContext.Provider value={{pjCart,addItem,removeItem,clearItem}}>
            {children}
        </pjContext.Provider>

    )

};
