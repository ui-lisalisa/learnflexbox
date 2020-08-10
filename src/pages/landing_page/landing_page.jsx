import React, {useState} from 'react';
// comps
import Copy from '../../comps/codeblock/copy_';
import ControlPanel from '../../comps/controller/controller_';
import LandingHeader from './landing_header/landing_header';
// styles
import '../../styles/animistas.css';

const LandingPage = () => {
  const [data, setData] = useState([]);

  return (
    <main style={{width: '100%'}}>
      <LandingHeader />
      <div className="layout">
        <Copy data={data} />
        <ControlPanel handleData={(i) => setData(i)} />
      </div>
    </main>
  );
};

export default LandingPage;
