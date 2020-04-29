import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import PostsPage from "../PostsPage";

const routes = {
  root: "/",
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={PostsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
