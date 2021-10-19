import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';
import './ItemDetailContainer.css';


const UserDetail = ({ match }) => {
	//  console.log('MATCH', match);
	let userID = match.params.id;
	const [usuario, setUser] = useState([]);

	useEffect(() => {
		axios(`https://api.github.com/users?id=${userID}`).then((res) =>
			setUser(res.data)
		);
	}, [userID]);


	return (
		<div className='ItemDetail' style={{ padding: 40 }}>
			<h1>User Detail</h1>
			{usuario.map((user) => {
				return (
					<Card key={user.id}>
						<Image src={user.avatar_url} wrapped ui={false} />
						<Card.Content>
							<Card.Header>{user.login}</Card.Header>
							<Card.Meta>
								<span>{user.type}</span>
							</Card.Meta>
							<Card.Description>{user.url}</Card.Description>
						</Card.Content>
					</Card>
					
				);		
				})}
		</div>
		
	);
	
};

export default UserDetail;