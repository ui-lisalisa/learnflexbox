import React, {useRef} from 'react';
import {sort} from './controller_helpers.jsx';
import '../../index.css';

let background = 'rgba(48, 188, 237, .4)';

let controls = [],
  isActive = [];

const makeControls = () => {
  for (let i = 1; i <= 9; i++) {
    controls.push({act_status: false});
  }
  return controls;
};

const ControlPanel = () => {
  const status = useRef([]);
  makeControls();

  const handleRemove = (arr, val) => {
    for (var i = arr.length; i--; ) {
      if (arr[i] === val) {
        arr.splice(i, 1);
      }
    }
  };

  const handleClick = (cont, i) => {
    if (isActive.includes(i)) {
      /**
       *
       * if item clicked is already active;
       *
       *   remove item from active array
       *
       */
      handleRemove(isActive, i);
    } else if (isActive.length < 3 && controls[i].act_status === false) {
      /**
       *
       * if item clicked is turning active and active array is less than 3;
       *
       *   push item to active array, then bubble sort active array
       *
       */
      isActive.push(i);
      sort(isActive);
      // const backgroundActive = 'rgb(48, 188, 237) !important';
      status.current[i].style.background = 'rgb(48, 188, 237)';
    }
    controls[i].act_status = !cont; //toggle boolean
    console.log('CURRENTLY ACTIVE', isActive);
  };

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
      {controls.map((control, i) => (
        <div
          ref={(ref) => (status.current[i] = ref)}
          style={{background: background}}
          className={'box'}
          key={i}
          act_status={control.act_status}
          onClick={() => handleClick(control, i)}></div>
      ))}
    </div>
  );
};

export default ControlPanel;
