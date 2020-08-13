import React from 'react';
import Copy from '../codeblock/copy_';
import './landing_footer.css';
import Char02 from '../../lib/static/char-002.svg';

const LandingFooter = (props) => {
  return (
    <div className="landing-footer">
      <div className="footer-img">
        <img src={Char02} alt="char" />
      </div>
      <Copy data={props.data} />
    </div>
  );
};

export default LandingFooter;
