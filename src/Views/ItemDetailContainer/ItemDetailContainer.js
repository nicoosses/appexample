import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';
import './ItemDetailContainer.css';

const ItemDetailContainer = ({ match }) => {
	
	let itemID = match.params.id;
	const [user, setUser] = useState([]);

	useEffect(() => {
		axios.get(`https://thronesapi.com/api/v2/Characters/${itemID}`).then((res) => setUser(res.data)
		);
	}, [itemID]);
	
	return (
			<div className='ItemDetail' style={{ padding: 40 }}>
			<h1>User Detail</h1>
					 <Card key={user.id}>
						<Image src={user.imageUrl} wrapped ui={false} />
						<Card.Content>
							<Card.Header>{user.id}</Card.Header>
							<Card.Meta>
								<span>{user.fullName}</span>
							</Card.Meta>
							<Card.Description>{user.title}</Card.Description>
						</Card.Content>
					</Card> 
		</div>
	);
	
};

export default ItemDetailContainer;