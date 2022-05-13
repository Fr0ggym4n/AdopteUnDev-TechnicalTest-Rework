import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './offer.css';

function Offer({ title, description, price, duration }) {
    return (
        <Card className='card-container'>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {description}
                    <br />
                    <small>Engagement until {duration}</small>
                </Card.Text>
                <Button variant="primary">Subscribe for {price}/month</Button>
            </Card.Body>
        </Card>
    )
}

export default Offer;