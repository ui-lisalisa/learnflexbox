import React from 'react';
import {STORE} from './STORE';

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
  height: '100%',
  display: 'flex',
  paddingLeft: '60px',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const Copy = (props) => {
  console.log(props.data);
  return (
    <div style={defaults}>
      <div style={{display: 'flex'}}>
        <h2 style={{writingMode: 'vertical-rl', textOrientation: 'upright'}}>
          CSS
        </h2>
        <div style={screen}>
          <pre>
            <code style={code}>{STORE['1'].css}</code>
          </pre>
        </div>
      </div>
      <div style={{display: 'flex'}}>
        <h2 style={{writingMode: 'vertical-rl', textOrientation: 'upright'}}>
          HTML
        </h2>
        <div style={screen}>
          <pre>
            <code style={code}>{STORE['1'].html}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Copy;
