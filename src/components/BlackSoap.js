import React, { Component } from 'react';

import { Button, Card } from 'react-bootstrap';
import blacksoap from '../../images/black-soap.jpg';
import blacksoapbar from '../../images/black-soap-shutter.jpg';
import product1 from '../../images/black-soap-stack.jpg';
import product2 from '../../images/liquid.jpg';
import product3 from '../../images/essential.jpg'

export default class BlackSoap extends Component {
    render() {
        return (
            <div className="black-soap-product">
                <div className="top-section">
                    <Card style={{ height: '100%' }} className="account-info">
                        <Card.Img src={blacksoapbar} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Black Soap</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                
                <div className="product-list">
                    <div className="card-container">
                        <Card>
                            <Card.Img variant="top" src={product1} />
                            <Card.Body>
                            <Card.Title>Raw Black Soap</Card.Title>
                            <Card.Text>
                                n/a
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button>Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                    </div>

                    <div className="card-container">
                        <Card>
                            <Card.Img variant="top" src={product2} />
                            <Card.Body>
                            <Card.Title>Liquid Black Soap</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button>Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                    
                    <div className="card-container">
                        <Card>
                            <Card.Img variant="top" src={product3} />
                            <Card.Body>
                            <Card.Title>Add Essential Oil?</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button>Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                    </div>          
                </div>
            </div>
        )
    }
}
