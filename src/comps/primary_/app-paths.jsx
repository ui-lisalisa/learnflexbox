import React from 'react';
import {Switch, Route} from 'react-router-dom';
//pages
import Demo from '../../pages/demo_page';
import ComingSoon from '../../comps/coming-soon_';
import MailChimp from '../plugins/mailchimp_';
import NotFound from '../../pages/not-found_page';
import About from '../../pages/about_page';

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
      <Route exact path={'/subscribe'} render={() => <MailChimp />} />
      <Route render={() => <NotFound />} />
    </Switch>
  );
};

export default AppPaths;
