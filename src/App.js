import React from "react";
import Box from "./comps/box";
import NotFound from "./comps/not_found";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Box grid="1" />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
