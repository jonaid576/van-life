import "./styles.css";
import React from "react";

import Home from "./components/Home.js";
import About from "./components/About.js";
import Vans from "./components/Vans.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
