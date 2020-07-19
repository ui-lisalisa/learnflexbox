import React from "react";
import Box from "./box";

const row = { display: "flex" };

let CONTROLLER = []

const Grid = () => {

  const handleRemove = (array, id) => {
    let index = array.indexOf(id);
    return array.splice(index, 1);
  }

  const handleControl = (status, id) => {
    status === true ? CONTROLLER.push(id) : handleRemove(CONTROLLER, id)
    console.log(status, id)
    
  }

  return (
    <div>
      <div style={row}>
        <Box grid={1} control={handleControl} />
        <Box grid={2} control={handleControl} />
        <Box grid={3} control={handleControl} />
      </div>
      <div style={row}>
        <Box grid={4} control={handleControl} />
        <Box grid={5} control={handleControl} />
        <Box grid={6} control={handleControl} />
      </div>
      <div style={row}>
        <Box grid={7} control={handleControl} />
        <Box grid={8} control={handleControl} />
        <Box grid={9} control={handleControl} />
      </div>
    </div>
  );
};

export default Grid;
