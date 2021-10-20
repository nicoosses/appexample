// 1
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import axios from 'axios';
import Spinner from '../Spinner/Spinner'
import './ItemListContainer.css';
import { Link } from 'react-router-dom';

export const ItemListContainer = () => {  

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {   
        axios(`https://thronesapi.com/api/v2/Characters`).then((json) =>  
          setUsers(json.data));
        setTimeout(() => {setIsLoading(false);},3000); 
      });
      
    return (
        <div className="ItemList-Container">
          {users.map((user) => {
                return (
                        <div key={user.id}>
                          <Link to={`/detail/${user.id}`}>                          
                            {isLoading ? <Spinner/> : <ItemList data={user}/>}  
                          </Link>
                        </div> 
                );
            })}
        </div>
    );
};

export default ItemListContainer;