// 1
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import Spinner from '../Spinner/Spinner'
import { Link } from 'react-router-dom';


export const ItemListContainer = () => {  
    const[users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {   
          fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data));
        setTimeout(() => {setIsLoading(false);},3000); //CLAVE EL TIMEOUT PARA SIMULAR LA CARGA DE IMAGENES
      }, []);
      
    return (

        <div className="ItemList-Container">
          {/* //4 */}
          {users.map((user) => {
                return (
                        <div key={user.id}>
                          <Link to={`/detail/${user.id}`}>           
                            {/* <ItemList data={user} />                   */}
                            {isLoading ? <Spinner/> : <ItemList data={user}/>}  
                          </Link>
                         
                        </div> 
                );
            })}
        </div>
    );
};

export default ItemListContainer;