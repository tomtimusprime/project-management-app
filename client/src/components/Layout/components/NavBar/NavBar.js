import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import {Link, Router} from 'react-router-dom'

const NavBar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Navbar fixed style={{backgroundColor: 'var(--dark-grey-main)'}} >
            <Navbar.Brand>Project 3</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link as='li'><Link to='/'>Dashboard</Link></Nav.Link>
            <Nav.Link as='li'><Link to='/projects'>Projects</Link></Nav.Link>
            </Nav>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar>
    );
};

export default NavBar;