import React from 'react';
import ProTip from '../protip/protip_';
import './protip_col.css';
import light from '../../../lib/static/light.svg';

const ProTipCol = (props) => {
  return (
    <div className="protip-col">
      <div className="pro-tips-col">
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px',
            marginLeft: '12px',
          }}>
          <img src={light} alt="light bulb" />
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginLeft: '12px',
            }}>
            {'Pro Tips'}
          </h2>
        </span>

        <div className="pt-co fadedScroller">
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
    </div>
  );
};

export default ProTipCol;
