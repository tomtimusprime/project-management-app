import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar>
    );
};

export default NavBar;