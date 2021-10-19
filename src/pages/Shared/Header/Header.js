import React, { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hook/useAuth/useAuth";

import logo from "../../../images/logo/logo.png";

const Header = () => {
  const { user, logOut ,name } = useAuth();
 
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="#home">
            <img
              src={logo}
              width="150"
              height="50"
              className="d-inline-block align-top "
              alt="SHCC logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/services#services">
              Our Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/about#about">
              About Us
            </Nav.Link>
            <Nav.Link as={HashLink} to="/doctors#doctors">
              Doctors
            </Nav.Link>
            <Nav.Link as={HashLink} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={HashLink} to="/contactUs">
              Contact Us
            </Nav.Link>

            {  user?.email || user?.displayName ? 
              <Button onClick={logOut} variant="light">
               <span><i class="fas fa-sign-out-alt"></i> LogOut </span>
              </Button>
             : 
              <Nav.Link as={Link} to="/login">
              <span> <i class="fas fa-sign-in-alt"></i> Login</span>
              </Nav.Link>
            }
           
            <Navbar.Text className="mx-2">
              Signed in as: <Link to="#login">{ user.displayName && user.displayName  }</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
