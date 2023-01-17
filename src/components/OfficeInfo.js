import React from "react";
import { HiOutlineSpeakerphone, HiOutlineKey } from "react-icons/hi";
import '../App.scss'
import styles from "./signup.module.css";
import SignUp from "./SignUp";
import DayPass from "./DayPass";

function OfficeInfo() {
  return (
    <>
      <div id="officeinfo">
        <hr className="line"></hr>
        <div className="headers">
          <h1>Office Hours & Day Passes</h1>
          <p className="about-gym">(Day and Week Passes include 24 Hour Access to Gym)</p>
        </div>

        <hr className="line"></hr>
        <div className="office-content">

          <h4>- <u>GymDay Pass:</u> $15</h4>
          <h4>- <u>Week Pass:</u> $30</h4>
          <h4>- <u>Monday - Friday:</u> 4:30pm - 7:00pm</h4>
          <h4>- <u>Saturday & Sunday:</u> By Appointment Only</h4>
        </div>
        <div className="Office-Info">
          <div className={styles.container}>
            <div className={styles.section}>
              <SignUp
                icon={<HiOutlineSpeakerphone />}
                title="Sign Up Here"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://form.jotform.com/ccbarbell1081/membership-information-record";
                }}
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
          <h1>Membership Rates</h1>
        </div>

        <hr className="line"></hr>
        <div className="about-gym">
          <h3>We are 24 Hours/7 Days a Week, to Our Members once Signed Up. No-Annual Fees, No-Sign Up Fees, No-Cancellation Fees. Month-to-Month Recurring Membership.<br /></h3>
          <br />
        </div>
        <div className="office-content">
          <h4>- $45/Month-to-Month Membership</h4>
          <h4 >- <u>3-Month Membership ($40/mo):</u> $120</h4>
          <h4>- <u>6-Month Membership ($38/mo):</u> $230</h4>
          <h4>- <u>1-Year Membership ($35/mo):</u> $420</h4>

        </div>
      </div>





      <div className="Office-Info">

        <div className={styles.container}>
          <div className={styles.section}>
            <SignUp
              icon={<HiOutlineSpeakerphone />}
              title="Sign Up Here"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://form.jotform.com/ccbarbell1081/membership-information-record";
              }}
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
      <p className="office-content">(24hr Access. Cancel Any Time, No-Cancellation Fee)</p>
      <div id="contactus">
        <hr className="line"></hr>
        <div className="headers">
          <h1 >Contact Us</h1>

        </div>

        <hr className="line"></hr>
        <div className="office-content">
          <h4><u>Phone:</u> <a href="tel:+1-805-489-1618">805-489-1618</a></h4>
          <h4 alt="Grover Beach, Avila Beach, Pismo Beach, Nipomo, San Luis Obispo, Oceano, Central Coast"><u>Address:</u> <a
            href="https://www.google.com/maps/place/Central+Coast+Barbell/@35.1092097,-120.6184355,21z/data=!4m13!1m7!3m6!1s0x80ec5ead667d5a27:0xdfac6f9659f20cc5!2s1081+Highland+Way+a,+Grover+Beach,+CA+93433!3b1!8m2!3d35.1092097!4d-120.6182988!3m4!1s0x80ec594b9187f103:0x1790f1c03fca0846!8m2!3d35.1092097!4d-120.6182987"
            target="_blank"
            rel="noopener noreferrer"
          >1081 Highland Way, Unit A, Grover Beach, CA 93433
          </a></h4>
          <h4 alt="Power Lift Gym Equipment Fitness Barbell Dumbbell Kettle Bell Plates Free Weights"><u>Saturday & Sunday:</u> By Appointment Only</h4>
        </div>
      </div>
    </>
  );
}
export default OfficeInfo;