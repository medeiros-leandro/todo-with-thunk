import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/**
 * @description All layout components
 */
import Header from "./layouts/Header";

/**
 * @description All pages/containers components
 */
import Home from "./containers/home";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Router;
