import React from 'react';
import {Pagehead} from '@primer/components';

const Header = () => {
  return (
    <Pagehead>
      <h1
        style={{
          // prettier-ignore
          fontFamily: '\'Rubik\', sans-serif',
          padding: '0 40px',
          letterSpacing: '1px',
        }}>
        Flexbox Generator
      </h1>
    </Pagehead>
  );
};

export default Header;
