import React from "react";
import "./css/custom.css";
import Header from "./components/header";
import MileageCalc from "./views/mileage-view";

function App() {
  return (
    <div className="app__container">
      <Header />
      <MileageCalc />
    </div>
  );
}

export default App;
