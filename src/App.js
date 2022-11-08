import { useState } from "react";
import "./App.scss";
import Header from "./components/header"
import EquipModal from "./components/EquipModal";
import data from "./services/data"



function App() {
  // const [state, setState] = useState()
  // const [modal, setModal] = useState(false);
  // const Toggle = () => setModal(!modal);

  // const onChangeCombobox = (e) => {
  //   const selectedId = e.target.value;
  //   const selectedEquipState = data.filter((d) => d.id === selectedId)[0];
  //   console.log(selectedEquipState)
  //   setState(selectedEquipState)
  // }

  // useEffect(() => {
  //   console.log(setState(data));
  // }, []);

  return (
    <div className="App">
      <Header/>
      <EquipModal/>
        
    </div>
  );
}

export default App;