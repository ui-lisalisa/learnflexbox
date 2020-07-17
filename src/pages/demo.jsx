import React from "react";
import Grid from "../comps/grid";
import Copy from "../comps/copy";

const defaults = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Demo = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div style={defaults} className="col-6">
            <Copy />
          </div>
          <div style={defaults} className="col-6">
            <Grid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
