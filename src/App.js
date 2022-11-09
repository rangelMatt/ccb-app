// import { useState } from "react";
import "./App.scss";
import Header from "./components/header"
import EquipModal from "./components/EquipModal";
import Footer from "./components/Footer";
// import data from "./services/data"



function App() {

  return (
    <div className="App">
      <Header/>
      <EquipModal/>
        <Footer/>
    </div>
  );
}

export default App;