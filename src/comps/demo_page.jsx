import React, {useState} from 'react';
import ControlPanel from './controller/controller_';
import './page-queries.css';
import {STORE} from '../comps/STORE';
// import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// import {ghcolors} from 'react-syntax-highlighter/dist/esm/styles/prism';

const defaults = {
  width: '100%',
  height: '450px',
  display: 'flex',
  paddingLeft: '60px',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const CodeBlock = (props) => {
  return (
    <pre>
      <code>{props.content}</code>
    </pre>
  );
};

const Copy = (props) => {
  const keys = Object.keys(STORE);
  if (keys.includes(props.data)) {
    return (
      <div style={defaults}>
        <div style={{display: 'flex'}}>
          <CodeBlock language={'css'} content={STORE[props.data].css} />
        </div>
        <div style={{display: 'flex'}}>
          <CodeBlock language={'html'} content={STORE[props.data].html} />
        </div>
      </div>
    );
  } else {
    return (
      <div style={defaults}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          Hello World
        </div>
      </div>
    );
  }
};

const Demo = () => {
  const [data, setData] = useState([]);

  return (
    <div style={{display: 'flex', flexWrap: 'flex', width: '100%'}}>
      <Copy data={data} />
      <ControlPanel handleData={(i) => setData(i)} />
    </div>
  );
};

export default Demo;
