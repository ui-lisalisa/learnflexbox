import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {CONTROLLER, sort} from './controller_helpers.jsx';
import {box} from './controller_styles';

const Box = (props) => {
  // const [hoverRef, isHovered] = useHover();
  /**
   * hover pending ui
   * <div
   *    ref={hoverRef}
   *    ...
   * />
   */
  const [isActive, setActive] = useState(null);
  const [status, setStatus] = useState(false);

  let handleClick = () => {
    const newStatus = !status;
    setStatus(newStatus);
    props.control(newStatus, props.grid);

    isActive === null ? setActive('ACTIVE') : setActive(null);
  };

  return (
    <div
      className={isActive}
      style={box}
      onClick={handleClick}
      grid={props.grid}
      id={props.grid}></div>
  );
};

Box.propTypes = {
  grid: PropTypes.number,
};

const ControlPanel = () => {
  const handleRemove = (id) => {
    let index = CONTROLLER.indexOf(id);
    return CONTROLLER.splice(index, 1);
  };

  const handleControl = (status, id) => {
    status === true ? CONTROLLER.push(id) : handleRemove(id);
    sort(CONTROLLER);
    console.log(CONTROLLER);
  };

  return (
    <main>
      <div className="container">
        <section>{/* css */}</section>
        <section>
          <div style={{display: 'flex'}}>
            <Box grid={1} control={handleControl} />
            <Box grid={2} control={handleControl} />
            <Box grid={3} control={handleControl} />
          </div>
          <div style={{display: 'flex'}}>
            <Box grid={4} control={handleControl} />
            <Box grid={5} control={handleControl} />
            <Box grid={6} control={handleControl} />
          </div>
          <div style={{display: 'flex'}}>
            <Box grid={7} control={handleControl} />
            <Box grid={8} control={handleControl} />
            <Box grid={9} control={handleControl} />
          </div>
        </section>
      </div>
      <section>{/* full */}</section>
    </main>
  );
};

export default ControlPanel;
