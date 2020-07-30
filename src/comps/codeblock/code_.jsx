import React from 'react';

const Code = (props) => {
  return (
    <section style={props.defaults}>
      <pre style={{padding: '20px'}}>
        <code style={{font: 'monospace'}}>{props.print}</code>
      </pre>
    </section>
  );
};

export default Code;
