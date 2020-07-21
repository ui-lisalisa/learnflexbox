import React, {useState} from 'react';
import {STORE} from './STORE';

const screen = {
  height: '100%',
  width: '100%',
  borderRadius: '6px',
  margin: '6px 6px 6px 60px',
  background: '#1F1F1F',
};

const color = {
  color: '#EEEEEE',
  fontFamily: 'Roboto',
};

const Copy = () => {
  return (
    <div style={screen}>
      <pre>
        <code style={color}>{STORE.a}</code>
      </pre>
    </div>
  );
};

export default Copy;
