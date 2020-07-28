import React from 'react';

const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <footer style={{padding: '40px', marginTop: '40px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <a
            href="https://github.com/hi-matbub/flexbox/blob/master/LICENSE"
            style={{
              // prettier-ignore
              fontFamily: '\'Rubik\', sans-serif',
              lineHeight: '28px',
              letterSpacing: '1px',
            }}>
            {' '}
            License
          </a>
          <a
            href="https://github.com/hi-matbub/flexbox/blob/master/CONTRIBUTING.md"
            style={{
              // prettier-ignore
              fontFamily: '\'Rubik\', sans-serif',
              lineHeight: '28px',
              letterSpacing: '1px',
            }}>
            Contributing
          </a>
          <a
            href="https://github.com/hi-matbub/flexbox/issues"
            style={{
              // prettier-ignore
              fontFamily: '\'Rubik\', sans-serif',
              lineHeight: '28px',
              letterSpacing: '1px',
            }}>
            Report a bug
          </a>
        </div>
      </div>
      <small
        style={{
          // prettier-ignore
          fontFamily: '\'Rubik\', sans-serif',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <i>
          © {date}
          &nbsp; | &nbsp;
          <a
            href="mailto:hi@matbub.co"
            target="_blank"
            rel="noopener noreferrer">
            {' '}
            hi-matbub
          </a>
        </i>
      </small>
    </footer>
  );
};

export default Footer;
