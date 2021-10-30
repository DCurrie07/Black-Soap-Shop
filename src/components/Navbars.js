import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSpa } from '@fortawesome/free-solid-svg-icons';

import Product from './Product';

import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Container } from 'react-bootstrap';
import { NavDropdown, Nav } from 'react-bootstrap';





  
export default class Navbars extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/Home">
                <FontAwesomeIcon icon ={faSpa} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="./Account">Account</Nav.Link>
                <Nav.Link href="./About">About</Nav.Link>
                <NavDropdown href="./Products" title="Products" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/BlackSoap">Black Soap</NavDropdown.Item>
                    <NavDropdown.Item href="/SheaButter">Shea Butter</NavDropdown.Item>
                    <NavDropdown.Item href="/EssentialOil">Essential Oil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Coming Soon!</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="/Auth">Sign In</Nav.Link>
                <Nav.Link eventKey={2} href="./cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}
