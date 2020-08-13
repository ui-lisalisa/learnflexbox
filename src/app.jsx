import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './comps/routes_';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
