import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(){
  return (
      <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">
              Employee Directory
          </span>
      </nav>
  );
};

export default Navbar;