import React, {useState} from 'react';
import ControlPanel from './controller/controller_';
import Copy from './pre';
import './page-queries.css';

const center = {
  width: '50%',
  display: 'flex',
  alignItems: 'center',
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
        <ControlPanel />
      </div>
    </div>
  );
};

export default Demo;
