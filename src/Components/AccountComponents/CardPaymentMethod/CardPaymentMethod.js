import React from 'react'
import './CardPaymentMethod.scss'
import {Card, Button} from 'react-bootstrap'

function CardPaymentMethod({ image, title, description, link, labelLink }) {
    
    return (
         <div className="cardPaymentMethod">
            <Card>
                <div className="box-img-card">
                    <Card.Img variant="top" src={["assets/images/Dashboard/" + image ]} />
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Link href={link}>
                        <Button variant="primary">{labelLink}</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
         </div>
    )
}

export default CardPaymentMethod;
