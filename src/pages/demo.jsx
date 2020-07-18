import React from "react";
import Grid from "../comps/grid";
import Copy from "../comps/copy";

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  margin: "0 40px",
};

const Demo = () => {
  return (
    <div style={row}>
      <div style={center}>
        <Copy />
      </div>
      <div style={center}>
        <Grid />
      </div>
    </div>
  );
};

export default Demo;
