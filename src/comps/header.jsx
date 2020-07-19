import React from "react";

const defaults = {
  height: "115px",
};

const Header = () => {
  return (
    <header style={defaults} className="container-fluid">
      <h1>Flexbox Visualization</h1>
    </header>
  );
};

export default Header;