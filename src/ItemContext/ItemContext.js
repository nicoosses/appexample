import React from 'react'
import { useState , createContext } from 'react'

export const pjContext = createContext();

export const PjProvider = ({ children }) => {

    const [pjCart, setPjCart] = useState ([]);


    const addItem = () => {


    }

    const removeItem = () => {
     
        
    }

    const clearItem = () => {

        
    }

    
 


    return(

        <pjContext.Provider value={{pjCart,addItem,removeItem,clearItem}}>
            {children}
        </pjContext.Provider>

    )

};
