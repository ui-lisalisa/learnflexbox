import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from './styles.module.css'
import useHover from './HELPERS';


const DEFAULT = { 
    height: "150px",
    width: "150px",
    borderRadius: "6px",
    border: "1px solid #969696",
    margin: "2px",
    cursor: "pointer",  
    '& a' : {
      background: "#AAAAAA"
    },
    '& a:hover': { 
      background: "rgb(48, 188, 237)"
    },
    '& a:active': { 
      background: "rgb(48, 188, 237)"
    }
  }


 
/*
DEFAULT COLORS === "NOT"
HOVER COLORS === "styles.HOVER"
ACTIVE COLORS === 
*/

const Box = (props) => {
  const [hoverRef, isHovered] = useHover();
  const [active, isActive] = useState(false);

  let handleClick = () => {
    return isActive(!active)    
  }

  // const setActive = () => {
  //   console.log('active', ACTIVE)
  //   return ACTIVE
  // }

  // const setHover = () => {
  //   console.log('hover')
  //   return styles.HOVER
  // }

  // let stateOf = () => {
  //   return isHovered ? setHover()
  //     : active === true ? setActive()
  //     : NOT

  // }

  return (           
    <div 
      ref={hoverRef} 
      className={styles.DEFAULTS}
      onClick={handleClick}
      grid={props.grid}
    ></div>    
  );
};

Box.propTypes = {
  grid: PropTypes.number,
};

export default Box;