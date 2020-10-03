import React from "react";
import "./css/custom.css";
import Header from "./components/header";
import MileageCalc from "./views/mileage-view";
import Crud from "./views/crud";

function App() {
  return (
    <div className="app__container">
      <Header />
      <MileageCalc />
      <Crud />
    </div>
  );
}

export default App;
