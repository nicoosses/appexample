import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCube, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CardExampleCard = (props) => (
  <div className="Cards">
    <Card>
        <Image src={props.img} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>
            <span className='date'>{props.subtitle}</span>
        </Card.Meta>
        <Card.Description>
            {props.description}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <FontAwesomeIcon icon= {faCube}>  </FontAwesomeIcon>{props.link}
        </Card.Content>
    </Card>
  </div>
)

export default CardExampleCard