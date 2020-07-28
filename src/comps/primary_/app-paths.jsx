import React from 'react';
import {Switch, Route} from 'react-router-dom';
//pages
import Demo from '../../pages/demo_page';
import ComingSoon from '../../comps/coming-soon_';
import NotFound from '../../pages/not-found_page';

const Path = () => {
  return (
    <Switch>
      <Route
        exact
        path={['/', '/flexbox', '/flexbox-generator', '/home']}
        render={() => <Demo />}
      />
      <Route
        exact
        path={['/assessments', '/challenges']}
        render={() => <ComingSoon />}
      />
      <Route render={() => <NotFound />} />
    </Switch>
  );
};

export default Path;
