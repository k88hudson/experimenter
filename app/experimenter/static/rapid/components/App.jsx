import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const foo = 1;

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <div>Rapid Experiments</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
