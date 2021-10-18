import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hook/useAuth/useAuth";

import logo from "../../../images/logo/logo.png";

const Header = () => {
  const { user, logOut } = useAuth();
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

            {user?.email ? 
              <Button onClick={logOut} variant="light">
                Log Out
              </Button>
             : 
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            }
            <Navbar.Text className="mx-2">
              Signed in as: <a to="#login">{user.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
