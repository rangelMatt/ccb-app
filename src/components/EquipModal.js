import React, { useState } from "react";
import "../App.scss";

import Modal from "../components/Modal";
import data from "../services/data";

function EquipModal() {
  const [state, setState] = useState();
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const onChangeCombobox = (e) => {
    const selectedId = e.target.value;
    const selectedEquipState = data.filter((d) => d.id === selectedId)[0];
    console.log(selectedEquipState);
    setState(selectedEquipState);
  };

  // useEffect(() => {
  //   console.log(setState(data));
  // }, []);

  return (
    <>
      {/* <head> */}
      <title>Gym Equipment</title>
      <meta name="Not only the best equipment for body building, strongman, crossfit, but for the general fitness enthusiast as well. Treadmill, step machine, elliptical."></meta>
      {/* </head> */}
      <div id="equip">
        <hr className="line"></hr>
        <header className="headers">
          <h1>Central Coast Barbell Equipment</h1>

          <hr className="line"></hr>
          <h2>Upper Body</h2>
          <section
            className="equipment"
            onChange={(e) => {
              onChangeCombobox(e);
            }}
          >
            {data.map(
              (d, string) =>
                d.id <= 5 && (
                  <span className="btn-group">
                    {/* <a > */}
                    <img
                      className="btn-group-images"
                      alt=""
                      src={d.src}
                      title={d.name}
                      onClick={() => {
                        setState(d);
                        Toggle();
                      }}
                      key={d}
                      value={d.id}
                      data-toggle="modal"
                    ></img>
                    {/* </a> */}
                    <button
                      title={d.name}
                      className="clickMe"
                      onClick={() => {
                        setState(d);
                        Toggle();
                      }}
                      key={d}
                      value={d.id}
                      data-toggle="modal"
                    >
                      {d.name}
                    </button>
                  </span>
                )
            )}
          </section>
          <h2>Lower Body</h2>
          <section
            className="equipment"
            onChange={(e) => {
              onChangeCombobox(e);
            }}
          >
            {data &&
              data.map(
                (d, indx) =>
                  d.id > 5 && (
                    <span className="btn-group">
                      <img
                        className="btn-group-images"
                        alt=""
                        src={d.src}
                        title={d.name}
                        onClick={() => {
                          setState(d);
                          Toggle();
                        }}
                        key={d}
                        value={d.id}
                        data-toggle="modal"
                      ></img>
                      <span>
                        <button
                          title={d.name}
                          className="clickMe"
                          onClick={() => {
                            setState(d);
                            Toggle();
                          }}
                          key={d}
                          value={d.id}
                          data-toggle="modal"
                        >
                          {d.name}
                        </button>
                      </span>
                    </span>
                  )
              )}
            <Modal
              style={{ height: "200px" }}
              show={modal}
              title={state?.name}
              children={state?.desc}
              src={state?.src}
              link={state?.link}
              // id={state?.id}
              close={Toggle}
            ></Modal>
          </section>
        </header>
      </div>
    </>
  );
}

export default EquipModal;
