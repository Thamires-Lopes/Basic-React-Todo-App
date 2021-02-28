import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ routes = [] }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Todo app</Navbar.Brand>
    <Nav className="mr-auto">
      {routes.map((route) => (
        <Link key={route.path} className="nav-link" to={route.path}>{route.name}</Link>
      ))}
    </Nav>
  </Navbar>
);

export default Header;
