import React from "react";
import PropTypes from "prop-types";

const Box = (props) => {
  return <div className="box" grid={props.grid}></div>;
};

Box.propTypes = {
  grid: PropTypes.string,
};

export default Box;
