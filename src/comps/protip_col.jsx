import React from 'react';
import ProTip from './protip';
import '../styles/protip_col.css';
import light from '../lib/static/light.svg';

const ProTipCol = (props) => {
  return (
    <div className="pro-tips-col">
      <span className="pro-tips-title">
        <img src={light} alt="light bulb" />
        <h2>{'Pro Tips'}</h2>
      </span>

      <div className="pro-tips-scroll">
        <ProTip
          author={'hi-matbub'}
          content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <ProTip
          author={'hi-matbub'}
          content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <ProTip
          author={'hi-matbub'}
          content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <ProTip
          author={'hi-matbub'}
          content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <ProTip
          author={'hi-matbub'}
          content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <ProTip
          author={'hi-matbub'}
          content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <ProTip
          author={'hi-matbub'}
          content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <ProTip
          author={'hi-matbub'}
          content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <ProTip
          author={'hi-matbub'}
          content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
        <ProTip
          author={'hi-matbub'}
          content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
      </div>
      <div className="fadedScroller_fade"></div>
    </div>
  );
};

export default ProTipCol;
