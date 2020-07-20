import React from 'react';
import Grid from '../../comps/grid';
import Copy from '../../comps/copy';
import './demo.css';

const center = {
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
};

const row = {
  display: 'flex',
  width: '100%',
};

const Demo = () => {
  return (
    <div className="row" style={row}>
      <div className="center" style={center}>
        <Copy />
      </div>
      <div className="center" style={center}>
        <Grid />
      </div>
    </div>
  );
};

export default Demo;
