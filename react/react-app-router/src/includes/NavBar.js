import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavItem } from "react-bootstrap";

export default () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">React Router App</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <NavItem>Home</NavItem>
            </Link>

            <Link to="/about">
              <NavItem>About</NavItem>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
