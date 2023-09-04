import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Success from "./Components/Success/Success";
import Cancel from "./Components/Cancel/Cancel";
import Benefit1 from "./Components/Home/Benefits/BenefitPage/Benefit1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/benefit1" element={<Benefit1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
