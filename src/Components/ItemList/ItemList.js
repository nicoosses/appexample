import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';
import './ItemList.css';
             //5
const ItemList = ({data}) => (
              //6
  <div className="Cards">
    <Card>
        <Image src={data.avatar_url} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{data.login}</Card.Header>
        <Card.Meta>
            <span className='date'>{data.id}</span>
        </Card.Meta>
        <Card.Description>
            {data.url}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        </Card.Content>
    </Card>
  </div>
)

export default ItemList;