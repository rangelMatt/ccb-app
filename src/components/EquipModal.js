import { useState } from "react";
import "../App.scss";

import Modal from "../components/Modal";
import data from "../services/data"



function EquipModal() {
  const [state, setState] = useState()
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const onChangeCombobox = (e) => {
    const selectedId = e.target.value;
    const selectedEquipState = data.filter((d) => d.id === selectedId)[0];
    console.log(selectedEquipState)
    setState(selectedEquipState)
  }

  // useEffect(() => {
  //   console.log(setState(data));
  // }, []);

  return (
    <>
      <hr className="line"></hr>
      <div className="headers">
        <h1>Central Coast Barbell Equipment</h1>

        <hr className="line"></hr>
        <div>
          <h2>
            Upper Body
          </h2>
        </div>
        <div className="equipment"
          onChange={(e) => {
            onChangeCombobox(e);
          }}
        >
          {data.map((d, string) => d.id <= 5 && (
            <div className="">

              <img className="btn-group-images" alt=""
                src={d.src}
              ></img><button

                className="clickMe"
                onClick={() => {
                  setState(d)
                  Toggle()
                }}
                key={d}
                value={d.id}
                data-toggle="modal"
              >
                {d.name}
              </button>
            </div>
          ))}

        </div>
        <div>
          <h2>
            Lower Body
          </h2>
          <div className="equipment"
            onChange={(e) => {
              onChangeCombobox(e);
            }}
          >
            {data && data.map((d, indx) => d.id > 5 && (
              <div className="btn-group">
                <img className="btn-group-images" alt=""
                  src={d.src}
                ></img>
                <button
                  className="clickMe"
                  onClick={() => {
                    setState(d)
                    Toggle()
                  }}
                  key={d}
                  value={d.id}
                  data-toggle="modal"
                >
                  {d.name}
                </button>
              </div>
            ))}
            <Modal
              style={{ height: '200px' }}
              show={modal}
              title={state?.name}
              children={state?.desc}
              src={state?.src}
              link={state?.link}
              // id={state?.id}
              close={Toggle}></Modal>

          </div>
        </div>
      </div>
    </>
  );
}

export default EquipModal;