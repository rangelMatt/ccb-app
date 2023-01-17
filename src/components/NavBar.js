import React from "react";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { FaBars } from 'react-icons/fa'
// import "../Styles/main.css"
import Nav from 'react-bootstrap/Nav'
import {
  NavLogo,
  // NavLink,
  // Bars,
  // NavMenu,
  // NavBtn,
  // NavBtnLink,
} from "../Styles/NavbarElements";
import "../Styles/main.css"

function NavBar() {
  return (
    <>
      <Navbar className="navbar">
        <span id="toggle-nav" >
          <FaBars />
        </span>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              {/* <NavMenu> */}
              <ul className="sidenav">
                <NavLogo to="/"><img src="../images/ccb-logo.jpeg" alt="centralcoastbarbell" width="90px" />

                </NavLogo>
                <Nav.Link
                  href="/"
                  activestyle={{ color: 'black' }}
                  className="li a"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/equip"
                  activestyle={{ color: 'black' }}
                  className="li a"
                >
                  Equipment
                </Nav.Link>
                <Nav.Link
                  href="/posingroom"
                  activestyle={{ color: 'black' }}
                  className="li a"
                >
                  Posing Room
                </Nav.Link>
                <Nav.Link
                  href="/officeinfo"
                  activestyle={{ color: 'black' }}
                  className="li a"
                >
                  Membership/Day Pass Info
                </Nav.Link>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;