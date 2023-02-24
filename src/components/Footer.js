import React from "react";
import {
  FaMapMarkedAlt,
  FaInstagram,
  FaPhoneSquareAlt,
  FaFacebook,
  FaYelp,
} from "react-icons/fa";
import "../App.scss";

function Footer() {
  const designedBy = (
    <a
      className="designedBy"
      href="https://github.com/rangelMatt"
      aria-label="*"
    >
      Matt Rangel
    </a>
  );

  return (
    <>
      {/* <head> */}
      <title>Social Media links</title>
      <meta name="Instagram, Facebook, Yelp, Google Maps, Phone number, are all included to find the gym for membership, exercise, weight lifting, goals."></meta>
      {/* </head> */}
      <footer id="officeinfo">
        <section className="footer-container">
          <div className="row">
            <span className="col social-links">
              <a href="https://instagram.com/centralcoast_barbell?igshid=YmMyMTA2M2Y=">
                <FaInstagram
                  size={30}
                  className="icon"
                  alt="Instagram Lift"
                  aria-label="*"
                />
              </a>
              <a href="https://www.facebook.com/CentralCoastBarbell">
                <FaFacebook size={30} className="icon" aria-label="*" />
              </a>
              <a href="https://www.yelp.com/biz/central-coast-barbell-grover-beach?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)">
                <FaYelp size={30} className="icon" aria-label="*" />
              </a>
              <a href="https://www.google.com/maps/place/Central+Coast+Barbell/@35.1092097,-120.6184355,21z/data=!4m13!1m7!3m6!1s0x80ec5ead667d5a27:0xdfac6f9659f20cc5!2s1081+Highland+Way+a,+Grover+Beach,+CA+93433!3b1!8m2!3d35.1092097!4d-120.6182988!3m4!1s0x80ec594b9187f103:0x1790f1c03fca0846!8m2!3d35.1092097!4d-120.6182987">
                <FaMapMarkedAlt
                  size={30}
                  className="icon"
                  alt="Location Grover Beach Arroyo Grande Oceano Nipomo Pismo Avila SLO San Luis Obispo Fitness Lifting Machines"
                  aria-label="*"
                />
              </a>
              <a href="tel:18054891618">
                <FaPhoneSquareAlt
                  size={30}
                  className="icon"
                  alt="Phone Number Text Contact Info Information"
                  aria-label="*"
                />
              </a>
            </span>
            <footer className="col">
              <span className="copyright py-4 text-center">
                <section className="container">
                  <small>
                    Owned By: &copy;{new Date().getFullYear()}
                    {" Central Coast Barbell"}
                  </small>
                  <br />
                  <small>Developed and Designed by: {designedBy}</small>
                </section>
              </span>
            </footer>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
