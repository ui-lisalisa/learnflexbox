import React from "react";
import Box from "./box";


const row = { display: "flex" };

const Grid = () => {  
  
  const callback = (count) => {
    console.log('yoooooo')
  }

  return (
    <div>
      <div style={row}>
        <Box grid={1} parentCallback={callback} />
        <Box grid={2} parentCallback={callback} />
        <Box grid={3} parentCallback={callback} />
      </div>
      <div style={row}>
        <Box grid={4} parentCallback={callback} />
        <Box grid={5} parentCallback={callback} />
        <Box grid={6} parentCallback={callback} />
      </div>
      <div style={row}>
        <Box grid={7} parentCallback={callback} />
        <Box grid={8} parentCallback={callback} />
        <Box grid={9} parentCallback={callback} />
      </div>
    </div>
  );
};


export default Grid;