import React, {useState} from 'react';
import ControlPanel from './controller/controller_';
import Copy from './pre';
import './page-queries.css';

const Demo = () => {
  const [data, setData] = useState([]);

  const handleData = (data) => {
    setData(data);
  };

  return (
    <div style={{display: 'flex', flexWrap: 'flex', width: '100%'}}>
      <Copy data={data} />
      <ControlPanel handleData={handleData} />
    </div>
  );
};

export default Demo;
