import React, { Fragment } from "react";
import "./App.scss";
import Header from "./components/header"
import EquipModal from "./components/EquipModal";
import Footer from "./components/Footer";
import PosingRoom from "./components/PosingRoom";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = () => {

  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div>
          {/* <Routes>
            <Route path='/' element={< Header />}></Route>
            <Route path='#equip' element={< EquipModal />}></Route>
          </Routes> */}
          <Header />
          <EquipModal />
          <PosingRoom />
          <Footer />
        </div>

      </div>
    </BrowserRouter>




  );
}

export default App;