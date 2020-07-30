import React, {useState} from 'react';
// comps
import Intro from '../lib/blog/intro-demo_page';
import Copy from '../comps/codeblock/copy_';
import ControlPanel from '../comps/controller/controller_';
// styles
import '../styles/animistas.css';

const Demo = () => {
  const [data, setData] = useState([]);

  return (
    <main style={{width: '100%'}}>
      <Intro />
      <div className="layout">
        <Copy data={data} />
        <ControlPanel handleData={(i) => setData(i)} />
      </div>
    </main>
  );
};

export default Demo;
