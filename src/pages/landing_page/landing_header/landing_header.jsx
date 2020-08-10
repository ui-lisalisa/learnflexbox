import React from 'react';
import './landing_header.css';
import Subscribe from '../../../comps/subscribe/subscribe';
import char001 from '../../../lib/static/char-001.svg';

const LearnFlexBox = () => (
  <span className="learnflexbox">
    #
    <h1>
      learn<span>flexbox</span>
    </h1>
  </span>
);

const LandingHeader = (props) => {
  return (
    <header className="header">
      <div className="col col-cont">
        <div className="lfb-cont">
          <LearnFlexBox />
          <p className={'alt-text hw'}>
            {'Subscribe for 30 days of Wire-framing Challenges.'}
          </p>
          <Subscribe />
        </div>
      </div>
      <div className="col col-char">
        <img src={char001} alt="character" className="char" />
      </div>
    </header>
  );
};

export default LandingHeader;
