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
    <div className="Office-Info">
      <div 
        onChange={(e) => {
          onChangeCombobox(e);
        }}
      >
        {data && data.map((d) => (
          <button
            className="clickMe"
            onClick={() => {
              setState(d)
              Toggle()
            }}
            key={d.id}
            value={d.id}
            data-toggle="modal"
          >
            {d.name}
          </button>
        ))}
        <Modal
        style={{ height: '200px' }}
        show={modal}
        title={state?.name}
        children={state?.desc}
        src={state?.src}
        link={state?.link}
        id={state?.id}
        close={Toggle}></Modal>
      </div>
      
    </div>
  );
}

export default EquipModal;