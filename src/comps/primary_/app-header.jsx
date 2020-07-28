import React from 'react';
import {Link} from 'react-router-dom';

// prettier-ignore
const Header = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '20px 40px', margin: '0 0 80px 0', background: '#79b8ff'}}>
      <h1
        style={{
          fontFamily: '\'Rubik\', sans-serif',
          fontSize: '26px',
          fontWeight: '500',
          letterSpacing: '1px',
        }}>
        <Link to='/' style={{color: '#f1f8ff'}}>Flexbox Generator</Link>
      </h1>
      <div style={{display: 'flex'}}>
        <Link to='/about' style={{color: '#f1f8ff',fontFamily: '\'Rubik\', sans-serif', letterSpacing:'1px', padding: '0 20px', fontSize:'16px'}}>About</Link>
        <Link to='/' style={{color: '#f1f8ff',fontFamily: '\'Rubik\', sans-serif', letterSpacing:'1px', padding: '0 20px', fontSize:'16px'}}>Generator</Link>
      </div>
    </div>
  );
};

export default Header;
