import React, { Component } from 'react';

import { Button, Card } from 'react-bootstrap';

import essential from '../../images/essential-main.jpg';
import peppermint from '../../images/peppermint-oil.jpg';
import lavender from '../../images/lavender-oil.jpg';
import eucalyptus from '../../images/eucalyptus-oil.jpg';

export default class EssentialOil extends Component {
    render() {
        return (
            <div className="essential-oil-product">
                <div className="top-section">
                    <Card className="essential-pic">
                        <Card.Img src={essential} alt="Shea Butter" />
                        <Card.ImgOverlay>
                            <Card.Title>ESSENTIAL OIL</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                
                <div className="product-list">
                    <div className="card-container">
                        <Card>
                            <Card.Img variant="top" src={peppermint} />
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
                            <Card.Img variant="top" src={lavender} />
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

                    <div className="card-container">
                        <Card>
                            <Card.Img variant="top" src={eucalyptus} />
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
