import React, { Component } from 'react';
import axios from 'axios';

import { Form, Button, Card } from 'react-bootstrap';

import loginpic from '../../../images/sign-in.jpg';

export default class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        axios.post(`sql5.freemysqlhosting.net/login`,
        {
            data: {
                username: this.state.username,
                password: this.state.password
            },
        }, 
        { withCredentials: true }
        ).then(response => {
            console.log("response", response);
        }).catch(error => {
            console.log("Error", error);
        })
        event.preventDefault();
    }
    
    render() {
        return (
            <div className="sign-in-form">
                <div className="top-section">
                    <Card style={{ height: '100%' }} className="login-pic">
                        <Card.Img src={loginpic} alt="Log In Pic" />
                        <Card.ImgOverlay>
                            <Card.Title>LOG IN</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </div>

                <Form className="sign-in" onSubmit={this.handleSubmit} style={{
                    width: `100%`
                }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <Button className="btn" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
