import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import {NavLink as Link} from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../../../assets/images/logo-white.png'
export const StyledLink = styled(Link)`
        color: white;
        text-decoration: none;

        &:hover {
            color: #ccc;
            text-decoration: none;
        }
    `

const NavBar = () => {
    const { isAuthenticated } = useAuth0();

    
    return (
        <Navbar fixed style={{backgroundColor: 'var(--blue-main)'}} >
            <Navbar.Brand className='py-0' style={{color: 'white'}}><img height='35px' src={Logo}></img></Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link  as='li'><StyledLink exact activeStyle={{color: '#ccc', fontWeight: 'bold'}} to='/'>Dashboard</StyledLink></Nav.Link>
            <Nav.Link  as='li'><StyledLink exact activeStyle={{color: '#ccc', fontWeight: 'bold'}} to='/projects'>Projects</StyledLink></Nav.Link>
            <Nav.Link  as='li'><StyledLink exact activeStyle={{color: '#ccc', fontWeight: 'bold'}} to='/projectList'>Projects</StyledLink></Nav.Link>
            </Nav>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar>
    );
};

export default NavBar;