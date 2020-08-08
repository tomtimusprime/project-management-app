import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LoginButton from "../Sidebar/components/LoginButton/LoginButton";
import LogoutButton from "../Sidebar/components/LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Navbar fixed style={{backgroundColor: 'var(--dark-grey-main)'}} >
            <Navbar.Brand>Project 3</Navbar.Brand>
            <Nav className="mr-auto">

            </Nav>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar>
    );
};

export default NavBar;