import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx;

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
