import React, {useState} from 'react';
// comps
import Copy from '../../comps/codeblock/copy_';
import ControlPanel from '../../comps/controller/control_panel/control_panel';
import LandingHeader from './landing_header/landing_header';
// styles
import '../../styles/animistas.css';
import './landing_main.css';

const LandingPage = () => {
  const [data, setData] = useState([]);

  return (
    <main className="main">
      <LandingHeader />
      <ControlPanel handleData={(i) => setData(i)} />

      <div className="layout">
        <Copy data={data} />
      </div>
    </main>
  );
};

export default LandingPage;
