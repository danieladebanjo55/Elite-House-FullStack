import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Success from "./Components/Success/Success";
import Cancel from "./Components/Cancel/Cancel";
import Benefit1 from "./Components/Home/Benefits/BenefitPage/Benefit1";
import Benefit2 from "./Components/Home/Benefits/BenefitPage/Benefit2";
import Benefit3 from "./Components/Home/Benefits/BenefitPage/Benefit3";
import Benefit4 from "./Components/Home/Benefits/BenefitPage/Benefit4";
import Benefit5 from "./Components/Home/Benefits/BenefitPage/Benefit5";
import Benefit6 from "./Components/Home/Benefits/BenefitPage/Benefit6";
import Disclaimer from "./Components/Home/Footer/Disclaimer";

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
          <Route path="/benefit2" element={<Benefit2 />} />
          <Route path="/benefit3" element={<Benefit3 />} />
          <Route path="/benefit4" element={<Benefit4 />} />
          <Route path="/benefit5" element={<Benefit5 />} />
          <Route path="/benefit6" element={<Benefit6 />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
