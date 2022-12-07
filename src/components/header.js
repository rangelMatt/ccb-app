import React, { useCallback } from "react";
import GorillaRack from "../images/gorillarack.png";
import styles from "./signup.module.css"
import SignUp from "./SignUp"
import DayPass from "./DayPass"
import ccbLogo from "../images/ccb-logo.jpeg"
import icarian from "../images/icarian-logo.png"
import hammerStrength from "../images/hammer-strength.png"
import cybex from "../images/cybex-logo-and-tagline.jpg"


import { HiOutlineSpeakerphone, HiOutlineKey } from "react-icons/hi";


function Header() {

  const shoot = useCallback((message) => {
    alert(message);
  }, []);

  // const stickyHeader = useRef()
  // useLayoutEffect(() => {
  //   const mainHeader = document.getElementById('App-header');
  //   let fixedTop = stickyHeader.current.offsetTop
  //   const fixedHeader = () => {
  //     if (window.pageYOffset > fixedTop) {
  //       mainHeader.classList.add('fixedTop')
  //     } else {
  //       mainHeader.classList.remove('fixedTop')
  //     }
  //   }
  //   window.addEventListener('scroll', fixedHeader)
  // }, [])
  return (
    <div>
      <hr className="line"></hr>
      <div className="App-header" id="App-header" >


        <header >
          <div className="Title">
            <img alt="Central Coast Barbell Logo" className="main-header"
              src={ccbLogo}
              sizes="small"></img>
            <div>
              <h5 className="sub-header">24HR Oldschool BodyBuilding & Powerlifting training facility</h5>
            </div>

          </div>

        </header>
      </div>
      <hr className="line"></hr>
      <div className="gorilla-rack">
        <img

          src={GorillaRack}
          alt="gorilla-rack"
        ></img>

      </div>

      <div className="logos">
        <img src={icarian} alt="" ></img>
        <img src={hammerStrength} alt=""></img>
        <img src={cybex} alt=""></img>

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
        <div className="about-gym">
          <h3>Central Coast Barbell is an oldschool, 24-hour training facility. Our Office is open Monday-Friday 4:30 PM to 7:00 PM for New member Sign-ups.<br />
            <br />
            We offer Free Weights, Specialty Bars, Selectorized (cable) Machines, Plate Loaded Machines, Chalk, Cardio Equipment, Powerlifting Equipment, Strongman Equipment.
            <br /><br />
            Central Coast Barbell strives to offer a Focused & Supportive environment/community for all fitness levels.</h3>
        </div>
      </div>
    </div>
  );
}
export default Header;