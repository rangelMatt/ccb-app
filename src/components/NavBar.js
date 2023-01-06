import React from "react";
import { Routes, Route, Link } from "react-router-dom"
import Header from "./header";
import "./nav.bar.scss"

import EquipModal from "./EquipModal";

import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = ({title}) => {

  return (
    <div className="NavBar">
      <nav>
        <ul>
          <li><AnchorLink href="#header">Home</AnchorLink></li>
          <li><AnchorLink href="#0">About</AnchorLink></li>
          <li><AnchorLink href="#equip">Equipment</AnchorLink></li>
          <li><AnchorLink href="#posingroom">Posing Room</AnchorLink></li>
          <li><AnchorLink href="#officeinfo">Office/Rates</AnchorLink></li>
          <li><AnchorLink href="#contactus">Contact Us</AnchorLink></li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;