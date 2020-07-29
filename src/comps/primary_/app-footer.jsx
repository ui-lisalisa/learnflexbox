import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/page-queries.css';

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
      <section className={'footer-cont'}>
        <div>
          <h2 style={{marginBottom: '20px'}}>{'Learn Flexbox'}</h2>
          <Path path={'/about'} name={'About'} color={'#FFF'} />
          <Path path={'/'} name={'Generator'} />
          <Path path={'/challenges'} name={'UI Challenges'} />
        </div>
        <div>
          <h2 style={{marginBottom: '20px'}}>{'Get In Touch'}</h2>
          <Path path={'/subscribe'} name={'Subscribe'} />
          <Path path={'/contribute'} name={'Contribute'} />
          <Path path={'/license'} name={'License'} />
          <Path path={'/report'} name={'Report a bug'} />
        </div>
      </section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <small
          style={{
            // prettier-ignore
            fontFamily: '\'Rubik\', sans-serif'
          }}>
          <i>
            © {date}
            &nbsp; | &nbsp; {'say'}
            <a
              href="https://www.buymeacoffee.com/himatbub"
              target="_blank"
              rel="noopener noreferrer">
              {' '}
              hi-matbub
            </a>
          </i>
        </small>
        <img
          style={{marginTop: '20px'}}
          src="https://travis-ci.com/hi-matbub/learnflexbox.svg?branch=master"
          alt="build status"
        />
      </div>
    </footer>
  );
};

export default Footer;
