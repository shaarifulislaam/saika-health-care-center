import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hook/useAuth/useAuth";

import logo from "../../../images/logo/logo.png";
import "./header.css";

const Header = () => {
  const {name, user, logOut } = useAuth();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/home">
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <img
                  src={logo}
                  width="150"
                  height="50"
                  className="d-inline-block align-top "
                  alt="SHCC logo"
                />
              </div>
              <div>
                {" "}
                <span className="fst-italic px-2 fs-1 fw-light fw-bolder text">
                  SHCC
                </span>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center ">
            <Nav.Link as={HashLink} to="/home#home" className="navbar">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/services#services" className="navbar">
              Our Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/about#about" className="navbar">
              About Us
            </Nav.Link>
            <Nav.Link as={HashLink} to="/doctors#doctors" className="navbar">
              Doctors
            </Nav.Link>
            <Nav.Link as={HashLink} to="/blog" className="navbar">
              Blog
            </Nav.Link>
            <Nav.Link as={HashLink} to="/contactUs" className="navbar">
              Contact Us
            </Nav.Link>

            {user?.email || user?.displayName ? (
              <Button onClick={logOut} variant="light">
                <span>
                  <i class="fas fa-sign-out-alt"></i> LogOut{" "}
                </span>
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login" className="navbar">
                <span>
                  <i class="fas fa-sign-in-alt"></i> Login
                </span>
              </Nav.Link>
            )}

            <Navbar.Text className="mx-2 ">
              <Link to="#login" >
                {(user.email || user.displayName) && (user.displayName || name)}
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
