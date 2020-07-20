import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import {CONTROLLER, sort} from './controller-helpers.jsx';
const row = {display: 'flex'};

const defaults = {
  height: '150px',
  width: '150px',
  borderRadius: '6px',
  border: '1px solid #969696',
  backgroundImage: 'url(./ui_/null_bloc.png)',
  margin: '2px',
  cursor: 'pointer',
};

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
      style={defaults}
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

    console.log(sort(CONTROLLER));
  };

  return (
    <div>
      <div style={row}>
        <Box grid={1} control={handleControl} />
        <Box grid={2} control={handleControl} />
        <Box grid={3} control={handleControl} />
      </div>
      <div style={row}>
        <Box grid={4} control={handleControl} />
        <Box grid={5} control={handleControl} />
        <Box grid={6} control={handleControl} />
      </div>
      <div style={row}>
        <Box grid={7} control={handleControl} />
        <Box grid={8} control={handleControl} />
        <Box grid={9} control={handleControl} />
      </div>
    </div>
  );
};

export default ControlPanel;
