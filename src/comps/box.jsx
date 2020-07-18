import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "../lib/styles.module.css";

const defaults = {
  height: "150px",
  width: "150px",
  borderRadius: "6px",
  border: "1px solid #969696",
  margin: "2px",
  cursor: "pointer",
};

const Box = (props) => {
  return (
    <div
      style={defaults}
      className={clsx(styles.effect)}
      grid={props.grid}
    ></div>
  );
};

Box.propTypes = {
  grid: PropTypes.string,
};

export default Box;
