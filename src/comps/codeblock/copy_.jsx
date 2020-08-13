import React, {useState, useEffect} from 'react';
import {ArrowRightIcon} from '@primer/octicons-react';
import moment from 'moment';
//libs
import {STORE} from '../../lib/STORE';
//comps
import Code from './code_';
//styles
import '../../styles/github_animations.scss';
import '../../styles/page-queries.css';

const defaults = {
  width: '100%',
  height: '450px',
  display: 'flex',
  borderRadius: '6px',
  flexDirection: 'column',
  background: '#26282B',
  color: '#EEE',
  letterSpacing: '1px',
  overflowY: 'scroll',
  position: 'relative',
};

// prettier-ignore
const Copy = (props) => {
  const moments = moment().format('llll');
  const keys = Object.keys(STORE);

  if (keys.includes(props.data)) {
    const print = `<style>

/** -------------------------------------
 * Generated on ${moments}
 * by Learn Flexbox under the MIT license 
 ** -------------------------------------*/

${STORE[props.data].css}
            
</style>
  
${STORE[props.data].html}`;


    return (
      <div className={'codeblock'}>
        <Code print={print} defaults={defaults}/>
      </div>
    );
  } else {
    return null;
  }
};

export default Copy;
