import React from "react";
import GorillaRack from "../images/gorillarack.png";
import styles from "./signup.module.css"
import SignUp from "./SignUp"
// import DayPass from "./DayPass"
import ccbLogo from "../images/ccb-logo.jpeg"
import icarian from "../images/icarian-logo.png"
import hammerStrength from "../images/hammer-strength.png"
import cybex from "../images/cybex-logo-and-tagline.jpg"


import { HiOutlineSpeakerphone, HiOutlineKey } from "react-icons/hi";
import Carousel from "./Carousel";

function Header() {

  return (
    <>
      <div >


        {/* <hr className="line"></hr> */}
        <div className="App-header" id="App-header" >


          <header >
            <div className="Title" alt="Central Coast Barbell Gym Membership Open Twenty Four Hours. ">
              <img alt="Central Coast Barbell Logo" className="main-header"
                src={ccbLogo}
                sizes="small"></img>
              <div>
                <h5 className="sub-header" alt="Fitness Bodybuilding BodyBuilder Powerlifting Powerlifter lift Exercise">24HR Oldschool BodyBuilding & Powerlifting training facility</h5>
              </div>

            </div>

          </header>
        </div>
        <hr className="line"></hr>
        <div className="gorilla-rack">
          <img

            src={GorillaRack}
            alt="gorilla-rack dumb bell rack weights"
          ></img>

        </div>

        <div className="logos">
          <img src={icarian} alt="icarian equipment" ></img>
          <img src={hammerStrength} alt="hammer strength equipment"></img>
          <img src={cybex} alt="cybex equipment"></img>

        </div>

        <hr className="line"></hr>
        <div className="Office-Info Grover Beach Oceano Arroyo Grande Pismo Nipomo Avila SLO San Luis Obispo">
          <div className={styles.container}>
            <div className={styles.section}>
              <SignUp
                icon={<HiOutlineSpeakerphone />}
                title="Sign Up Here"
                alt="Membership Information Open 24 hours 7 days a week discounts fitness weight lifting"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://form.jotform.com/ccbarbell1081/membership-information-record";
                }}
              />
              <SignUp
                icon={<HiOutlineKey />}
                title="Day Pass"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://form.jotform.com/ccbarbell1081/waiver";
                }}
              />

            </div>

          </div>
          <div>

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
      <Carousel />
      <hr className="line"></hr>
    </>
  );
}
export default Header;