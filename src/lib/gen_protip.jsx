import React from 'react';

const GenProTip = () => {
  return (
    <div>
      <p style={{marginTop: '40px', textAlign: 'center'}}>
        Don't forget to set the set the &nbsp;<b>height</b> and &nbsp;
        <b>width</b> for the &nbsp;
        <code
          style={{
            background: '#EEE',
            border: '1px solid grey',
            borderRadius: '3px',
            padding: '2px',
          }}>
          .parent
        </code>
        &nbsp;class.
      </p>
    </div>
  );
};

export default GenProTip;
