import React from "react";
import Start from "./Start";
const Navbar = () => {
  const scroll = () => {
    document.documentElement.scrollTop = 600;
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Start class={"start-button"} />
        <button onClick={scroll} className="read-button">
          Sta je sortiranje?
        </button>
      </div>
    </div>
  );
};

export default Navbar;
