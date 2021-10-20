import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './ItemList.css';
            
const ItemList = ({data}) => (
              
  <div className="Cards">
    <Card>
        <Image src={data.imageUrl} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{data.id}</Card.Header>
        <Card.Meta>
            <span>{data.fullName}</span>
        </Card.Meta>
        <Card.Description>
            {data.title}
        </Card.Description>
        </Card.Content>
           <Card.Content extra>
        </Card.Content>
    </Card>
  </div>
)

export default ItemList;