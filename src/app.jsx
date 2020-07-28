import React from 'react';
import Demo from './pages/demo_page';
import Header from './comps/app-header';
import Footer from './comps/app-footer';
import NotFound from './pages/notfound';
import './styles/github_animations.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route
            path={['/', '/flexbox', '/flexbox-generator']}
            render={() => <Demo />}
          />
          <Route render={() => <NotFound />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
