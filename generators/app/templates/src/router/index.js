import React, { Component, Fragment } from "react";
import { HashRouter,Route } from "react-router-dom";
import Home from '../page';
class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Route exact path={`/`} component={Home} />
        </Fragment>
      </HashRouter>
    );
  }
}
export default Router;