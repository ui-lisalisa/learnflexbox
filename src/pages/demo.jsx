import React from "react";
import Grid from "../comps/grid";
import Copy from "../comps/copy";

const center = {
  width: "50%",
  display: "flex",
  justifyContent: "center",
};

const row = {
  display: "flex",
  width: "100%",
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