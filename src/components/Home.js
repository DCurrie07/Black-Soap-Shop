import React, { Component } from 'react';
import styled from 'styled-components';

import Carousel from 'react-bootstrap/Carousel';
import { Card, ImgOverlay } from 'react-bootstrap';

import pic1 from '../../images/black-soap-home.jpg';
import pic2 from '../../images/benefits-two.jpg';
import pic3 from '../../images/natural-home.jpg';
import pic4 from '../../images/black-soap-bar.jpg';
import pic5 from '../../images/shea-butter.jpg';
import pic6 from '../../images/essential-oils-3.jpg';




export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="top-half">
                    <Carousel style={{ 
                        width: `100%` }}>
                        <Carousel.Item interval={2500} >
                            <img style={{ height: '500px' }}
                            className="d-block w-100"
                            src={pic1}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Black Soap Shop</h3>
                            <p>A unique skin care experience</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2500}>
                            <img style={{ height: '500px' }}
                            className="d-block w-100"
                            src={pic2}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Highlights</h3>
                            <p>100% Vegan</p>
                            <p>Great for acne and eczema</p>
                            <p>Excellent for sensitive skin</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2500}>
                            <img style={{ height: '500px' }}
                            className="d-block w-100"
                            src={pic3}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>100% Natural</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className="bottom-half">
                    <Card className="product-image">
                        <Card.Img src={pic4} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title style={{ fontSize: "4rem"}}>AFRICAN BLACK SOAP</Card.Title>
                        </Card.ImgOverlay>
                    </Card>

                    <Card className="product-image">
                        <Card.Img src={pic5} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title style={{ fontSize: '5rem' }} >SHEA BUTTER</Card.Title>
                        </Card.ImgOverlay>
                    </Card>

                    <Card className="product-image">
                        <Card.Img src={pic6} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title style={{ fontSize: '5rem' }} >ESSENTIAL OILS</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            </div>
        )
    }
}
