import React from "react";
import posingRoom from "../images/posing-room.jpg";

function PosingRoom() {


  return (
    <div>
      <hr className="line"></hr>
      <div className="headers">
        <h1>Posing Room</h1>

        <hr className="line"></hr>
      </div>
      <div className="about-gym">
        <h3>What sort of Oldschool Bodybuilding Gym would not have its own Dedicated POSING ROOM. Put together with the perfect lighting and mirrors, (and high mirror to see your back) perfect to Practice your posing Routine, or to just get a sick Progress Picture with a PUMP.</h3>
      </div>
      <div className="gorilla-rack">
        <img
          src={posingRoom}
          alt="gorilla-rack"
        ></img>
      </div>
    </div>
  );
}
export default PosingRoom;