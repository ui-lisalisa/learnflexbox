import React from "react";
import Box from "./box";

const Grid = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Box grid="1" />
          </div>
          <div className="col">
            <Box grid="2" />
          </div>
          <div className="col">
            <Box grid="3" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Box grid="4" />
          </div>
          <div className="col">
            <Box grid="5" />
          </div>
          <div className="col">
            <Box grid="6" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Box grid="7" />
          </div>
          <div className="col">
            <Box grid="8" />
          </div>
          <div className="col">
            <Box grid="9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
