import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from './styles.css'
import useHover from './helpers';

const defaults = {
  height: "150px",
  width: "150px",
  borderRadius: "6px",
  border: "1px solid #969696",
  margin: "2px",
  cursor: "pointer"
}



const Box = (props) => {
  const [hoverRef, isHovered] = useHover();
  // const [active, isActive] = useState('false');
  const [isActive, setActive] = useState(null);

  let handleClick = () => {
    if (isActive === null){
      return setActive('ACTIVE')
    }
    else return setActive(null)
    
    
  }

  return (           
    <div 
      ref={hoverRef} 
      className={isActive}
      style={defaults}
      onClick={handleClick}
      grid={props.grid}
      id={props.grid}
    ></div>    
  );
};

Box.propTypes = {
  grid: PropTypes.number,
};

export default Box;