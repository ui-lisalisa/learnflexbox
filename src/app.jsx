import React from 'react';
import Demo from './comps/demo_page';
import {Pagehead} from '@primer/components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Header = () => {
  return <Pagehead>Flexbox Generator</Pagehead>;
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
