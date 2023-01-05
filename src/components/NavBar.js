import React from "react";
import "./nav.bar.scss"

function NavBar() {

  return (
    <div className="NavBar">
      <nav>
        <ul>
          <li><a href="#0">Home</a></li>
          <li><a href="#0">About</a></li>
          <li><a href="./EquipModal">Equipment</a></li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;