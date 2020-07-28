import React from 'react';
import Path from './app-paths';
import Header from './app-header';
import Footer from './app-footer';

const Body = () => {
  return (
    <div className="App">
      <Header />
      <div style={{display: 'flex'}}>
        <div style={{width: '10%'}}></div>
        <div style={{width: '80%'}}>
          <Path />
        </div>
        <div style={{width: '10%'}}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Body;
