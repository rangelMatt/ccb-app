import React, { useRef, useLayoutEffect, useCallback } from "react";
import GorillaRack from "../images/gorillarack.png";
import styles from "./signup.module.css"
import SignUp from "./SignUp"
import DayPass from "./DayPass"

import { HiOutlineSpeakerphone, HiOutlineKey } from "react-icons/hi";


function Header() {

  const shoot = useCallback((message) => {
    alert(message);
  }, []);

  const stickyHeader = useRef()
  useLayoutEffect(() => {
    const mainHeader = document.getElementById('App-header');
    let fixedTop = stickyHeader.current.offsetTop
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        mainHeader.classList.add('fixedTop')
      } else {
        mainHeader.classList.remove('fixedTop')
      }
    }
    window.addEventListener('scroll', fixedHeader)
  }, [])
  return (
    <div>
      <hr className="line"></hr>
      <div className="App-header" id="App-header" ref={stickyHeader}>


        <header >
          <div className="Title">
            <h1 className="main-header">Central Coast Barbell</h1>
            <div>
              <h5 className="sub-header">24HR Oldschool BodyBuilding & Powerlifting training facility</h5>
            </div>

          </div>

        </header>
      </div>
      <hr className="line"></hr>
      <div>
        <img
          className="gorilla-rack"
          src={GorillaRack}
          alt="gorilla-rack"
        ></img>
      </div>

      <hr className="line"></hr>
      <div className="Office-Info">
        <div className={styles.container}>
          <div className={styles.section}>
            <SignUp
              icon={<HiOutlineSpeakerphone />}
              title="Sign Up Here"
              onClick={() => shoot('Know how to Swole')}
            />
            <DayPass
              icon={<HiOutlineKey />}
              title="Day Pass"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://form.jotform.com/ccbarbell1081/waiver";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;