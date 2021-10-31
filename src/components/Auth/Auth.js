import React, { Component } from 'react';

import Signin from '../Auth/signin';

import { Form, Button } from 'react-bootstrap';

export default class Auth extends Component {
    render() {
        return (
            <div>
                <Signin />
                
            </div>
        )
    }
}
