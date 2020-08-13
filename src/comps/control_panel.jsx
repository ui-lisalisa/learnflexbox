import React from 'react';
import Controller from './controller_';
import ProTipCol from './protip_col';
import '../styles/control_panel.css';
import bg from '../lib/static/bg01.svg';
import Window from './helpers/handleWindow';

const ControlPanel = (props) => {
  const {height, width} = Window();

  return (
    <div className="control_panel_wrapper">
      {width < 992 ? <ProTipCol /> : null}
      <div className="control_panel" style={{backgroundImage: `url(${bg})`}}>
        {width > 992 ? <ProTipCol /> : null}
        <Controller handleData={props.handleData} />
      </div>
    </div>
  );
};

export default ControlPanel;
