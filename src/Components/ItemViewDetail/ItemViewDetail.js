import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';
import ItemCount from '../ItemCount/ItemCount';

const ItemViewDetail = ({ match }) => {
	
	let pjID = match.params.id;
	const [pj, setPj] = useState([]);

	useEffect(() => {
		axios.get(`https://thronesapi.com/api/v2/Characters/${pjID}`).then((res) => setPj(res.data)
		);
	}, [pjID]);
	
	return (
			<div className='ItemViewDetail' style={{ padding: 40 }}>
			<h1>User Detail</h1>
					 <Card key={pj.id}>
						<Image src={pj.imageUrl} wrapped ui={false} />
						<Card.Content>
							<Card.Header>{pj.id}</Card.Header>
							<Card.Meta>
								<span>{pj.fullName}</span>
							</Card.Meta>
							<Card.Description>{pj.title}</Card.Description>
						</Card.Content>
						<ItemCount stock="10" initial={0} onAdd={(counter) => onAdd(counter)} />  
					</Card> 
		</div>
	);
	
};

export default ItemViewDetail;