import React from "react";
import "./App.scss";
import Header from "./components/header"
import EquipModal from "./components/EquipModal";
import Footer from "./components/Footer";
import PosingRoom from "./components/PosingRoom";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OfficeInfo from "./components/OfficeInfo";




const App = () => {

  return (
    
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path='/' element={< Header />} />
          <Route path='/equip' element={< EquipModal />} />
          <Route path='/posingroom' element={< PosingRoom />} />
          <Route path='/officeinfo' element={< OfficeInfo />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>




  );
}

export default App;