import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss';
import { Icon } from '@iconify/react';

function NavBar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Icon icon="emojione:hammer" width="25" height="25"></Icon>

                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>s
            </Container>
        </Navbar>
    );
}

export default NavBar;
