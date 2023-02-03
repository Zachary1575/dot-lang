import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Pages
import Lang from './pages/Lang';
import About from './pages/About'

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Lang />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
