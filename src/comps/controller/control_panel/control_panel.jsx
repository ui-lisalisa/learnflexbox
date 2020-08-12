import React from 'react';
import Controller from '../controller/controller_';
import ProTip from '../protip/protip_';
import './control_panel.css';
import bg from '../../../lib/static/bg01.svg';
import light from '../../../lib/static/light.svg';

const ControlPanel = (props) => {
  return (
    <div className="control_panel_wrapper">
      <div className="control_panel" style={{backgroundImage: `url(${bg})`}}>
        <div className="pro-tips-col">
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '16px',
              marginLeft: '12px',
            }}>
            <img src={light} alt="light bulb" />
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginLeft: '12px',
              }}>
              {'Pro Tips'}
            </h2>
          </span>
          <ProTip
            author={'hi-matbub'}
            content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
          />
        </div>
        <Controller handleData={props.handleData} />
      </div>
    </div>
  );
};

export default ControlPanel;
