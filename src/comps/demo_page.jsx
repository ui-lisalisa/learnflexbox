import React, {useState} from 'react';
import ControlPanel from './controller/controller_';
import './page-queries.css';
import {STORE} from '../comps/STORE';

const screen = {
  height: '200px',
  width: '100%',
  borderRadius: '6px',
  background: '#1F1F1F',
  overflowY: 'scroll',
};

const code = {
  color: '#EEEEEE',
  fontFamily: 'Roboto',
  letterSpacing: '1px',
  margin: '6px 60px 6px 60px',
};

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
    <div style={screen}>
      <h2 style={{marginLeft: '20px', color: '#EEE'}}>{props.dataType}</h2>
      <pre>
        <code style={code}>{props.content}</code>
      </pre>
    </div>
  );
};

const Copy = (props) => {
  const keys = Object.keys(STORE);
  if (keys.includes(props.data)) {
    return (
      <div style={defaults}>
        <div style={{display: 'flex'}}>
          <CodeBlock dataType={'CSS'} content={STORE[props.data].css} />
        </div>
        <div style={{display: 'flex'}}>
          <h2>HTML</h2>
          <CodeBlock dataType={'HTML'} content={STORE[props.data].html} />
        </div>
      </div>
    );
  } else {
    return (
      <div style={defaults}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <CodeBlock dataType={'CSS'} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <CodeBlock dataType={'HTML'} />
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
