import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import {Link, Router} from 'react-router-dom'
import styled from 'styled-components'
const NavBar = () => {
    const { isAuthenticated } = useAuth0();

    const StyledLink = styled(Link)`
        color: white;
        text-decoration: none;

        &:hover {
            color: #ccc;
            text-decoration: none;
        }
    `
    return (
        <Navbar fixed style={{backgroundColor: 'var(--blue-main)'}} >
            <Navbar.Brand style={{color: 'white'}}>Project 3</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link  as='li'><StyledLink to='/'>Dashboard</StyledLink></Nav.Link>
            <Nav.Link  as='li'><StyledLink to='/projects'>Projects</StyledLink></Nav.Link>
            </Nav>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar>
    );
};

export default NavBar;