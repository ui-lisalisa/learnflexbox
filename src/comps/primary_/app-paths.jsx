import React from 'react';
import {Switch, Route} from 'react-router-dom';
//pages
import Demo from '../../pages/demo_page';
import NotFound from '../../pages/not-found_page';

const Path = () => {
  return (
    <Switch>
      <Route
        path={['/', '/flexbox', '/flexbox-generator']}
        render={() => <Demo />}
      />
      <Route render={() => <NotFound />} />
    </Switch>
  );
};

export default Path;
