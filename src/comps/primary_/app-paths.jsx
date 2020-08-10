import React from 'react';
import {Switch, Route} from 'react-router-dom';
//pages
import Demo from '../../pages/landing_page/landing_page';
import ComingSoon from '../../comps/coming-soon_';
import NotFound from '../../pages/not-found_page';
import About from '../../pages/about_page';
import License from '../../pages/license_';

const AppPaths = () => {
  return (
    <Switch>
      <Route
        exact
        path={['/', '/flexbox', '/flexbox-generator', '/home']}
        render={() => <Demo />}
      />
      <Route
        exact
        path={['/assessments', '/challenges', '/support']}
        render={() => <ComingSoon />}
      />
      <Route exact path={'/about'} render={() => <About />} />
      <Route exact path={'/license'} render={() => <License />} />
      <Route render={() => <NotFound />} />
    </Switch>
  );
};

export default AppPaths;
