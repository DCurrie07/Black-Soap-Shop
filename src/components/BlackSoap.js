import React, { Component } from 'react';

import { Card, Button } from 'react-bootstrap';
import blacksoap from '../../images/black-soap.jpg';
import pic1 from '../../images/black-soap-bar.jpg';

export default class BlackSoap extends Component {
    render() {
        return (
            <div className="black-soap-product">
                <div className="about-section">
                    <Card>
                        <Card.Img variant="top" src={pic1} />
                        <Card.Body>
                        <Card.Text>
                            AFRICAN BLACK SOAP
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="product-list">
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={blacksoap} />
                        <Card.Body>
                            <Card.Title>African Black Soap</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                        </Card>

                        <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={blacksoap} />
                        <Card.Body>
                            <Card.Title>African Black Soap</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                        </Card>
                </div>
            </div>
        )
    }
}
