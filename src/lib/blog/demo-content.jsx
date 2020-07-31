import React from 'react';
import flex from '../static/flex.png';
import flexColumn from '../static/flex-column.png';
import colCenter from '../static/col-center-center.png';
import rowCenter from '../static/row-center-center.png';

import './blog-defaults.css';

const DemoContent = () => {
  return (
    <div className="demo-content">
      <h3 className="demo-h3">Basic Flexbox Examples</h3>
      <p>
        While there are several ways to go about aligning content on the dom, us
        folks over hear at Learn Flexbox prefer to use flexbox. It wouldn't hurt
        to get familiar with a few of these layouts below.
      </p>
      <div className="cont-wrap">
        <img src={flex} alt="flex" className={'demo-img'} />
        <pre className="code">
          <code>{`
  .parent {
    display: flex;
  }
          `}</code>
        </pre>
      </div>
      <div className="cont-wrap">
        <img src={flexColumn} alt="flex" className={'demo-img'} />
        <pre className="code">
          <code>{`
  .parent {
    display: flex;
    flex-direction: column;
  }
          `}</code>
        </pre>
      </div>
      <div className="cont-wrap">
        <img src={colCenter} alt="flex" className={'demo-img'} />
        <pre className="code">
          <code>{`
  .parent {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
          `}</code>
        </pre>
      </div>
      <div className="cont-wrap">
        <img src={rowCenter} alt="flex" className={'demo-img'} />
        <pre className="code">
          <code>{`
  .parent {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
          `}</code>
        </pre>
      </div>
    </div>
  );
};

export default DemoContent;
