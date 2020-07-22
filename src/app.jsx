import React from 'react';
import Demo from './comps/demo_page';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const defaults = {
  height: '50px',
  fontFamily: 'Roboto',
};

const Header = () => {
  return (
    <header style={defaults}>
      <h1>Flexbox Visualization</h1>
    </header>
  );
};

const NotFound = () => {
  return (
    <>
      <h1>{'404'}</h1>
      <p>{'Whoops, that wasnt there!'}</p>
      <a href="/flexbox-visualization">Go Home</a>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/flexbox-visualization" render={() => <Demo />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
