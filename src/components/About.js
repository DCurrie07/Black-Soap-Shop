import React, { Component } from 'react';

import { Card } from 'react-bootstrap';
import aboutpic from '../../images/about-us.jpg';
import aboutpic2 from '../../images/sniff-soap.jpg';
import aboutpic3 from '../../images/black-soap-benefits.jpg';
import benefits from '../../images/shea-butter-benefits.png';


export default class About extends Component {
    render() {
        return (
            <div>
                <div className="top-section">
                    <Card style={{ height: '100%' }} className="account-info">
                        <Card.Img src={aboutpic} alt="Shea Butter" />
                        <Card.ImgOverlay>
                            <Card.Title>ABOUT OUR PRODUCTS</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </div>

                <div class="about-container">
                    <div class="content-wrapper">
                        <img src={aboutpic2} alt="sniffing oils" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem corporis id voluptates veniam voluptas quod voluptate, esse, sunt debitis quidem deleniti officiis architecto? Necessitatibus, animi eveniet voluptatibus, temporibus saepe ab dolorum praesentium aperiam dolores similique odio tempore, officia eius dolor. Autem consequuntur, modi reprehenderit laudantium harum quod ut! Repudiandae.</p>
                    </div>
                </div>

                <div class="spcaer60"></div>

                <div class="squares-wrapper">
                    <div class="squares">
                        <div class="square">
                            <div class="img-wrapper-one">
                                <img src={aboutpic3} alt="Fries" />
                            </div>

                            <div class="square-text-wrapper">

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem corporis id voluptates veniam voluptas quod voluptate, esse, sunt debitis quidem deleniti officiis architecto? Necessitatibus, animi eveniet voluptatibus, temporibus saepe ab dolorum praesentium aperiam dolores similique odio tempore, officia eius dolor. Autem consequuntur, modi reprehenderit laudantium harum quod ut! Repudiandae.</p>
                            </div>
                        </div>

                        <div class="square">

                            <div class="img-wrapper-two">
                                <img src={benefits} alt="benefits" />
                            </div>

                            <div class="square-text-wrapper">

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem corporis id voluptates veniam voluptas quod voluptate, esse, sunt debitis quidem deleniti officiis architecto? Necessitatibus, animi eveniet voluptatibus, temporibus saepe ab dolorum praesentium aperiam dolores similique odio tempore, officia eius dolor. Autem consequuntur, modi reprehenderit laudantium harum quod ut! Repudiandae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
