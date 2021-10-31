import React, { Component } from 'react';
import { Form, FloatingLabel, Card, Button } from 'react-bootstrap';
import topPic from '../../images/account.jpg'



export default class Account extends Component {
    render() {
        return (
            <div className="account-container">
                <div className="top-section">
                <Card style={{ height: '100%' }} className="account-info">
                    <Card.Img src={topPic} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Account</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                </div>

                <div className="account-input">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="input"
                    >
                        <Form.Control type="Name" placeholder="Name" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingStreetOne" label="StreetOne">
                        <Form.Control type="street" placeholder="Street One" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingStreetTwo" label="StreetTwo">
                        <Form.Control type="street" placeholder="Street 2" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingCity" label="City">
                        <Form.Control type="city" placeholder="City" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingState" label="State">
                        <Form.Control type="state" placeholder="State" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingZipcode" label="Zipcode">
                        <Form.Control type="zipcode" placeholder="Zipcode" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingEmail" label="Email">
                        <Form.Control type="email" placeholder="E-mail" />
                    </FloatingLabel>

                    <Button className="btn" variant="secondary" size="lg">
                        Submit
                    </Button>
                </div>
            </div>
        )
    }
}
