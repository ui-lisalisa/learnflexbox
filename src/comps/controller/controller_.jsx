import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import {sort} from './controller_helpers.jsx';
import {box} from './controller_styles';

/**
 * handleClick(){
 *  //check if active
 *    //if active; return false and remove key from style obj;
 *
 *  //check if length is 3 or less
 *    //if true; push to array;
 *
 *  //check if in array;
 *    //set active to true;
 *
 *  //if active is true;
 *    //push color to style obj.
 *
 * }
 *
 */

let controls = [],
  isActive = [];

const makeControls = () => {
  for (let i = 1; i <= 9; i++) {
    controls.push({act_status: false});
  }
  return controls;
};

const ControlPanel = () => {
  makeControls();

  function splice(arr, val) {
    for (var i = arr.length; i--; ) {
      if (arr[i] === val) {
        arr.splice(i, 1);
      }
    }
  }

  const handleToggle = (i) => {
    if (i === isActive[0]) {
      return splice(isActive, i);
    } else {
      isActive.push(i + 1);
      sort(isActive);
    }
  };

  const handleWarning = (i) => {
    console.log('whoa', i);
    return;
  };

  const handleClick = (cont, i) => {
    controls[i].act_status = !cont; //toggler
    isActive.length < 3 && controls[i].act_status === true
      ? sort(isActive.push(i))
      : handleWarning(i);

    // sort(isActive.push(i));
    console.log(isActive);
    // isActive.length < 3 ? handleToggle(i) : handleWarning(i);
  };

  controls.map((i, j) => console.log(i, j));

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
      {controls.map((control, i) => (
        <div
          style={box}
          key={i}
          act_status={control.act_status}
          onClick={() => handleClick(control.act_status, i)}></div>
      ))}
    </div>
  );
};

export default ControlPanel;

// const Box = (props) => {
//   // const [hoverRef, isHovered] = useHover();
//   /**
//    * hover pending ui
//    * <div
//    *    ref={hoverRef}
//    *    ...
//    * />
//    */
//   const [isActive, setActive] = useState(null);
//   const [status, setStatus] = useState(false);

//   let handleClick = () => {
//     // const newStatus = !status;
//     // setStatus(newStatus);
//     // props.control(newStatus, props.grid);
//     // isActive === null ? setActive('ACTIVE') : setActive(null);
//   };

//   return (
//     <div
//       className={isActive}
//       style={box}
//       onClick={handleClick}
//       grid={props.grid}
//       id={props.grid}></div>
//   );
// };

// Box.propTypes = {
//   grid: PropTypes.number,
// };

// const ControlPanel = (props) => {
//   const handleRemove = (id) => {
//     let index = CONTROLLER.indexOf(id);
//     return CONTROLLER.splice(index, 1);
//   };

//   const handleControl = (status, id) => {
//     status === true ? CONTROLLER.push(id) : handleRemove(id);
//     sort(CONTROLLER);
//     props.handleData(sort(CONTROLLER));
//     // console.log(CONTROLLER);
//   };

//   const dL = new Array(9);

//   return (
//     <main>
//       <section>
//         {dL.map(function(i){
//           return <Box grid={i + 1} control={handleControl}/>;
//         })}
//       </section>
//     </main>
//   );
// };

// const Control = React.createClass({
//   render: () => {
//     const dL = new Array(9);
//     return (
//       <section>
//         {dL.map(function(i){
//           return <Box grid={i + 1}/>;
//         })}
//       </section>
//     );
//   }
// });

// export default Control;
