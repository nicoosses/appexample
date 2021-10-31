// 1
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import axios from 'axios';
import Spinner from '../Spinner/Spinner'
import './ItemListContainer.css';
import { Link } from 'react-router-dom';

export const ItemListContainer = () => {  

    const [pjs, setPjs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pjCart, setPjCart] = useState ([]);
    
    useEffect(() => {   
        axios(`https://thronesapi.com/api/v2/Characters`).then((json) =>  
          setPjs(json.data));
        setTimeout(() => {setIsLoading(false);},3000); 
      });
      
    return (
        <div className="ItemList-Container">
          {pjs.map((pj) => {
                return (
                        <div key={pj.id}>
                          
                          <Link to={`/ItemDetailContainer/${pj.id}`}>                          
                            
                            {isLoading ? <Spinner/> : <ItemList data={pj}/>}  
                           
                          </Link>
                        </div> 
                );
            })}
        </div>
    );
};

export default ItemListContainer;