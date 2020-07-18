import React from "react";
import PropTypes from "prop-types";

const defaults = {
  height: "150px",
  width: "150px",
  borderRadius: "6px",
  border: "1px solid #969696",
  margin: "2px",
  cursor: "pointer",
  background: "#AAAAAA"
};

const Box = (props) => {
  return (
    <div
      style={defaults}
      className={'sa'}
      grid={props.grid}
    ></div>
  );
};

Box.propTypes = {
  grid: PropTypes.string,
};

export default Box;
