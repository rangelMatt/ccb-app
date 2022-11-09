import React, { useCallback } from "react";
import { FaMapMarkedAlt, FaInstagram, FaPhoneSquareAlt, FaFacebook, FaYelp } from "react-icons/fa";
import '../App.scss'
import styles from "./signup.module.css";
import SignUp from "./SignUp";
import DayPass from "./DayPass";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


import { HiOutlineSpeakerphone, HiOutlineKey } from "react-icons/hi";

function Footer() {
  const shoot = useCallback((message) => {
    alert(message);
  }, []);
  return (
    <>
    <hr className="line"></hr>
      <div className="headers">
        <h1>Office Hours & Day Passes</h1>
        </div>
        <hr className="line"></hr>
        <div className="office-content">
          <h4><u>Day Passes:</u> $$$</h4>
          <h4><u>Monday - Friday:</u> 4:30pm - 7:00pm</h4>
          <h4><u>Saturday & Sunday:</u> By Appointment Only</h4>
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

        <hr className="line"></hr>
        <div className="headers">
        <h1 >Contact Us</h1>
        </div>
        
        <hr className="line"></hr>
        <div className="office-content">
          <h4><u>Phone:</u> <a href="tel:+1-805-627-2329">805-627-2329</a></h4>
          <h4><u>Address:</u> <a
            href="https://www.google.com/maps/place/Central+Coast+Barbell/@35.1092097,-120.6184355,21z/data=!4m13!1m7!3m6!1s0x80ec5ead667d5a27:0xdfac6f9659f20cc5!2s1081+Highland+Way+a,+Grover+Beach,+CA+93433!3b1!8m2!3d35.1092097!4d-120.6182988!3m4!1s0x80ec594b9187f103:0x1790f1c03fca0846!8m2!3d35.1092097!4d-120.6182987"
            target="_blank"
            rel="noopener noreferrer"
          >1081 Highland Way, Unit A, Grover Beach, CA 93433
          </a></h4>
          <h4><u>Saturday & Sunday:</u> By Appointment Only</h4>
        </div>
      
      <footer >
        <div className="footer-container">
          <div className="row">
            <div className="col social-links">
              <a
                href="https://instagram.com/centralcoast_barbell?igshid=YmMyMTA2M2Y=">
                <FaInstagram
                  size={30}

                  className="icon"
                />
              </a>
              <a
                href="https://www.facebook.com/CentralCoastBarbell">
                <FaFacebook
                  size={30}
                  className="icon"
                />
              </a>
              <a
                href="https://www.yelp.com/biz/central-coast-barbell-grover-beach?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)">
                <FaYelp
                  size={30}
                  className="icon"
                />
              </a>
              <a
                href="https://www.google.com/maps/place/Central+Coast+Barbell/@35.1092097,-120.6184355,21z/data=!4m13!1m7!3m6!1s0x80ec5ead667d5a27:0xdfac6f9659f20cc5!2s1081+Highland+Way+a,+Grover+Beach,+CA+93433!3b1!8m2!3d35.1092097!4d-120.6182988!3m4!1s0x80ec594b9187f103:0x1790f1c03fca0846!8m2!3d35.1092097!4d-120.6182987">
                <FaMapMarkedAlt
                  size={30}
                  className="icon"
                />
              </a>
              <a
                href="+18054891618">
                <FaPhoneSquareAlt
                  size={30}
                  className="icon"
                />
              </a>
            </div>
            <div className="col social-links">
            </div>
            <div className="col">
              <div
                onClick={() =>
                  this.props.applyPickedLanguage(
                    window.$primaryLanguage,

                  )
                }
                style={{ display: "inline" }}
              >
                <span
                  className="iconify language-icon mr-5"
                  data-icon=""
                  data-inline="false"
                  id={window.$primaryLanguageIconId}
                ></span>
              </div>
              <div
                onClick={() =>
                  this.props.applyPickedLanguage(
                    window.$primaryLanguageIconId
                  )
                }
                style={{ display: "inline" }}
              >
              </div>
            </div>
            <div className="col">
              <div className="copyright py-4 text-center">
                <div className="container">
                  <small>
                    {/* Copyright &copy;{"Matt Rangel"} */}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;