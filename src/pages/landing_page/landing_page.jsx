import React, {useState} from 'react';
// comps
import Copy from '../../comps/codeblock/copy_';
import ControlPanel from '../../comps/controller/control_panel/control_panel';
import LandingHeader from './landing_header/landing_header';
import LandingFooter from '../../comps/landing_footer/landing_footer';
// styles
import '../../styles/animistas.css';
import './landing_main.css';

const LandingPage = () => {
  const [data, setData] = useState([]);

  return (
    <main className="main">
      <LandingHeader />
      <ControlPanel handleData={(i) => setData(i)} />
      <LandingFooter data={data} />
    </main>
  );
};

export default LandingPage;
