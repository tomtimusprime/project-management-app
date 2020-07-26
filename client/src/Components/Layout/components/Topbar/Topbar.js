import React from "react";
import { Navbar, Nav, Spinner } from "react-bootstrap";
import LoginButton from "./components/LoginButton/LoginButton";
import LogoutButton from "./components/LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Topbar = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Router>
        <Navbar.Brand href="/">A+ Team</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
              <Nav.Link  href='/page2' >Page2</Nav.Link>
              <Nav.Link href='/page3'>Page3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</Nav>
      </Router>
    </Navbar>
  );
};

export default Topbar;
