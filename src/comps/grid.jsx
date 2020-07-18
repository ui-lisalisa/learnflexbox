import React from "react";
import Box from "./box";

const row = { display: "flex" };

const Grid = () => {
  return (
    <div>
      <div style={row}>
        <Box grid={1} />
        <Box grid={2} />
        <Box grid={3} />
      </div>
      <div style={row}>
        <Box grid={1} />
        <Box grid={2} />
        <Box grid={3} />
      </div>
      <div style={row}>
        <Box grid={1} />
        <Box grid={2} />
        <Box grid={3} />
      </div>
    </div>
  );
};

export default Grid;
