import React from 'react';
import {Link} from 'react-router-dom';

const Path = (props) => {
  return (
    <Link
      to={props.path}
      style={{
        // prettier-ignore
        fontFamily: '\'Rubik\', sans-serif',
        lineHeight: '28px',
        letterSpacing: '1px',
      }}>
      {' '}
      {props.name}
    </Link>
  );
};

const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <footer style={{padding: '40px 0', marginTop: '40px'}}>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'flex-start',
          marginBottom: '60px',
          paddingTop: '20px',
          borderTop: '1px solid #000',
        }}>
        <div style={{display: 'flex', flexDirection: 'column', width: '15%'}}>
          <Path
            path={
              'https://github.com/hi-matbub/flexbox/blob/master/CONTRIBUTING.md'
            }
            name={'Contributing'}
          />
          <Path
            path={'https://github.com/hi-matbub/flexbox/blob/master/LICENSE'}
            name={'License'}
          />
          <Path
            path={'https://github.com/hi-matbub/flexbox/issues'}
            name={'Report a bug'}
          />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', width: '15%'}}>
          <Path path={'/about'} name={'About'} />
          <Path path={'/assessments'} name={'Assessments'} />
          <Path path={'/'} name={'Generator'} />
          <Path path={'/challenges'} name={'UI Challenges'} />
        </div>
      </section>
      <small
        style={{
          // prettier-ignore
          fontFamily: '\'Rubik\', sans-serif',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <i>
          © {date}
          &nbsp; | &nbsp; say
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
