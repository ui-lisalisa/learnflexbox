import React, {useRef} from 'react';
import {handleSort, handleRemove} from './controller_helpers.jsx';

let controls = [],
  isActive = [],
  inQuery = [];

let box = {
  height: '150px',
  width: '150px',
  borderRadius: '6px',
  border: 'none',
  background: 'rgba(48, 188, 237, .4)',
  margin: '2px',
  cursor: 'pointer',
};

const makeControls = () => {
  for (let i = 1; i <= 9; i++) {
    controls.push({act_status: false});
  }
  return controls;
};

makeControls(); //build array

const ControlPanel = (props) => {
  const status = useRef([]);

  const handleClick = (cont, i) => {
    if (isActive.includes(i)) {
      /**
       *
       * IF ITEM CLICKED IS ALREADY ACTIVE
       *
       *   😄 Remove item from active array
       *   😄 Send data to Copy
       *   😄 Set background color
       *
       */
      handleRemove(isActive, i);
      status.current[i].style.background = 'rgba(48, 188, 237, 0.4)';
    } else if (isActive.length < 3 && controls[i].act_status === false) {
      /**
       *
       * IF ITEM CLICKED IS TURNING ACTIVE AND ACTIVE ARRAY IS LESS THAN 3
       *
       *   😄 Push item to active array, then bubble sort active array
       *   😄 Send data to Copy
       *   😄 Set background color
       *
       */
      isActive.push(i);
      handleSort(isActive);
      status.current[i].style.background = 'rgb(48, 188, 237)';
    }

    controls[i].act_status = !cont; // toggle boolean

    inQuery = []; // empty previous

    isActive.map((i) => inQuery.push(`${i}`));
    props.handleData(inQuery.toString());
  };

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
      {controls.map((control, i) => (
        <button
          ref={(ref) => (status.current[i] = ref)}
          type={'button'}
          style={box}
          key={i}
          act_status={control.act_status}
          onClick={() => handleClick(control, i)}></button>
      ))}
    </div>
  );
};

export default ControlPanel;
