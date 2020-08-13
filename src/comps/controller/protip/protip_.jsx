import React from 'react';
import check from '../../../lib/static/check.svg';
import './protip.css';

const ProTip = (props) => {
  return (
    <div className="protip_i">
      <div className="check_box">
        <img src={check} alt="check" />
      </div>
      <div
        style={{display: 'flex', flexDirection: 'column', marginLeft: '8px'}}>
        <span className="pt-content">{props.content}</span>
        <span style={{fontSize: '12px', marginTop: '6px'}}>{props.author}</span>
      </div>
    </div>
  );
};

export default ProTip;
