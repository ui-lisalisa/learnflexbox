import React from 'react';
import Body from './comps/primary_/app-body';
import './styles/github_animations.scss';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Body />
    </Router>
  );
};
export default App;
