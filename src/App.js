// import { useState } from "react";
import "./App.scss";
import Header from "./components/header"
import EquipModal from "./components/EquipModal";
import Footer from "./components/Footer";
import PosingRoom from "./components/PosingRoom";
import NavBar from "./components/NavBar";



function App() {

  return (
    <div className="App">
      <NavBar/>
      <Header />
      <EquipModal />
      <PosingRoom />
      <Footer />
    </div>
  );
}

export default App;