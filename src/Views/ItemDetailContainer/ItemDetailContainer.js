import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';
import './ItemDetailContainer.css';


const UserDetail = ({ match }) => {
	//  console.log('MATCH', match);
	let userID = match.params.id;
	const [usuario, setUser] = useState([]);

	useEffect(() => {
		axios(`https://api.github.com/users/${userID}`).then((res) =>
			setUser(res.data)
		);
	}, [userID]);


	return (
		<div>

		<div className='ItemDetail' style={{ padding: 40 }}>
			<h1>User Detail</h1>
			console.log(usuario);
				{/* <h2>User Id: {usuario.login}</h2>
				<h2>User name: {usuario.login}</h2> */}
				
					 <Card key={usuario.id}>
						<Image src={usuario.avatar_url} wrapped ui={false} />
						<Card.Content>
							<Card.Header>{usuario.login}</Card.Header>
							<Card.Meta>
								<span>{usuario.type}</span>
							</Card.Meta>
							<Card.Description>{usuario.url}</Card.Description>
						</Card.Content>
					</Card> 
		</div>

		</div>
		


	);
	
};

export default UserDetail;
