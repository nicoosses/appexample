import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemViewDetail.css';
import {pjContext} from '../../ItemContext/ItemContext'


import { PjProvider } from '../../ItemContext/ItemContext';

const ItemViewDetail = ({ match }) => {
	
	let pjID = match.params.id;
	const [pj, setPj] = useState([]);
	const {initial} = useContext(pjContext);
	const {minValue} = useContext(pjContext);
	const {maxValue} = useContext(pjContext);


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
						<ItemCount stock="10" initial={0} maxValue={10} minValue={0}/>  
					</Card> 
			</div>
	);
	
};

export default ItemViewDetail;