import React, {useState} from 'react';
import ControlPanel from './controller/controller_';
import './page-queries.css';
import {STORE} from './lib/STORE';
// import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// import {ghcolors} from 'react-syntax-highlighter/dist/esm/styles/prism';

const defaults = {
  width: '100%',
  height: '450px',
  display: 'flex',
  margin: '0 60px',
  flexDirection: 'column',
  background: '#eee',
  overflowY: 'scroll',
};

const CodeBlock = (props) => {
  return (
    <pre style={{padding: '20px'}}>
      <code style={{font: 'monospace'}}>{props.content}</code>
    </pre>
  );
};

const Copy = (props) => {
  const keys = Object.keys(STORE);
  if (keys.includes(props.data)) {
    return (
      <section style={defaults}>
        <div style={{display: 'flex', height: '60%'}}>
          <CodeBlock language={'css'} content={STORE[props.data].css} />
        </div>
        <div style={{display: 'flex', height: '40%'}}>
          <CodeBlock language={'html'} content={STORE[props.data].html} />
        </div>
      </section>
    );
  } else {
    return (
      <section style={defaults}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <h2 style={{fontFamily: "'Rubik', sans-serif"}}>Try me!</h2>
        </div>
      </section>
    );
  }
};

const Demo = () => {
  const [data, setData] = useState([]);

  return (
    <main style={{width: '100%'}}>
      <section style={{padding: '40px 60px'}}>
        <p>
          Flexbox can be confusing. Let this guide help you master the ways of
          flexbox in the most <i>pratical</i> approach possible.
        </p>
      </section>
      <div style={{display: 'flex'}}>
        <Copy data={data} />
        <ControlPanel handleData={(i) => setData(i)} />
      </div>
    </main>
  );
};

export default Demo;
