import React from "react";
import posingRoom from "../images/posing-room.jpg";

function PosingRoom() {
  return (
    <>
      {/* <head> */}
      <title>Posing Room</title>
      <meta name="Posing room with a phone stand to take pictures with mirrors to capture front and back as well as a scale to measure weight"></meta>
      {/* </head> */}
      <div id="posingroom">
        <hr className="line"></hr>
        <header className="headers">
          <h1>Posing Room</h1>

          <hr className="line"></hr>
        </header>
        <main className="about-gym">
          <h3>
            What sort of Oldschool Bodybuilding Gym would not have its own
            Dedicated POSING ROOM. Put together with the perfect lighting and
            mirrors, (and high mirror to see your back) perfect to Practice your
            posing Routine, or to just get a sick Progress Picture with a PUMP.
          </h3>
        </main>
        <span className="gorilla-rack">
          <img src={posingRoom} alt="gorilla-rack" aria-label="*"></img>
        </span>
      </div>
    </>
  );
}
export default PosingRoom;
