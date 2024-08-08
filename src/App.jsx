import "./App.css";
import "../src/index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Facilities from "./components/facilities/Facilities";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Roomsandsuits from "./components/room/Roomsandsuits";
import Contactus from "./components/contact/Contactus"




const App = () => {
  return (

    <Router>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/room" element={<Roomsandsuits />} />
        <Route path="/contact" element={<Contactus />} />




      </Routes>

    </Router>
  );
};

export default App;