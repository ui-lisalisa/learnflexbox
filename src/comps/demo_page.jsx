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
  const [data, setData] = useState([]);

  const handleData = (data) => {
    setData(data);
  };

  return (
    <div className="row" style={{display: 'flex', width: '100%'}}>
      <div className="center" style={center}>
        <Copy data={data} />
      </div>
      <div className="center" style={center}>
        <ControlPanel handleData={handleData} />
      </div>
    </div>
  );
};

export default Demo;
