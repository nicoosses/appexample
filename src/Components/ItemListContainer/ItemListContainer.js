// 1
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

export const ItemListContainer = () => {
  //2  
    const[users, setUsers] = useState([]);

    console.log(users);
  //3  
    useEffect(() => {
        setTimeout(()=> {
          fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data));
      }, []);}, 2000)  
      
    
    
    
    return (

        <div className="ItemList-Container">
          {/* //4 */}
          {users.map((user) => {
                return (
                    <div>
                        <ItemList data={user}/>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemListContainer;