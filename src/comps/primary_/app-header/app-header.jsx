import React from 'react';
import {Link} from 'react-router-dom';
// import '../../styles/github_animations.scss';
import './app-header.css';

// prettier-ignore
const Header = () => {
  return (
    <header className={'page-head'}>
      <h1 className={'page-title'}>
        <Link className='hover-grow' to='/' style={{color: '#f1f8ff'}}>Learn Flexbox</Link>
      </h1>
      <div style={{display: 'flex', alignItems: 'flex-end'}}>
        <Link className='hover-grow header-link' to='/'>Generator</Link>
        <Link className='hover-grow header-link' to='/challenges'>UI Challenges</Link>
      </div>
    </header>
  );
};

export default Header;
