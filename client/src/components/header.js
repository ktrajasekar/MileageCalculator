import React from "react";
import mileageLogo from '../images/car-icon.svg';
function Header() {
  return (
    <header>
      <div>
      <img src={mileageLogo} alt="Mileage Calculator" />
      </div>
      <div>
        <h2 className="text-center">Mileage Calculator </h2>
      </div>
    </header>
  );
}

export default Header;
