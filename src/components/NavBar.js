import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {
  NavLogo,
} from "../Styles/NavbarElements";
import "../Styles/main.css"

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <Navbar className="navigation">
        <NavLogo
          to="/">
          <img
            src="../images/ccb-logo.jpeg"
            alt="centralcoastbarbell" width="90px"
            className="brand-name" />
        </NavLogo>

        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                  }>
              <Nav className="me-auto">
                  {/* <NavMenu> */}
                  <ul className="sidenav">


                    <Nav.Link
                      href="/"
                      activestyle={{ color: 'black' }}
                      className="li link"
                      aria-label="*"
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      href="/equip"
                      activestyle={{ color: 'black' }}
                      className="li link"
                      aria-label="*"
                    >
                      Equipment
                    </Nav.Link>
                    <Nav.Link
                      href="/posingroom"
                      activestyle={{ color: 'black' }}
                      className="li link"
                      aria-label="*"
                    >
                      Posing Room
                    </Nav.Link>
                    <Nav.Link
                      href="/officeinfo"
                      activestyle={{ color: 'black' }}
                      className="li link"
                      aria-label="*"
                    >
                      Membership/Day Pass Info
                    </Nav.Link>
                  </ul>

              </Nav>
        </div>


      </Navbar>
    </>
  );
}
export default NavBar;