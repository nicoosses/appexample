// 1
import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';

export const ItemList = () => {
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

        <div className="ItemListContainer">
          {/* 4 */}
          {users.map((user) => {
                return (
                    <div>
                        <Item data={user}/>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;