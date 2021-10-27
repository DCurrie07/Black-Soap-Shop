import React, { Component } from 'react';

import { Button, Card } from 'react-bootstrap';
import sheabutter from '../../images/shea-butter-2.jpg';
import sheaproduct from '../../images/shea-shutter.jpg';
import essentialproduct from '../../images/essential-oils-shutter.jpg';

export default class SheaButter extends Component {
    render() {
        return (
            <div className="shea-butter-product">
                <div className="top-section">
                    <Card style={{ height: '100%' }} className="account-info">
                        <Card.Img src={sheaproduct} alt="Shea Butter" />
                        <Card.ImgOverlay>
                            <Card.Title>SHEA BUTTER</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                
                <div className="product-list">
                    <div className="card-container">
                        <Card>
                            <Card.Img variant="top" src={sheabutter} />
                            <Card.Body>
                            <Card.Title>Raw Shea Butter </Card.Title>
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
                            <Card.Img variant="top" src={essentialproduct} />
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
