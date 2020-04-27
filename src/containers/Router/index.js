import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import Cadastro from "../Cadastro";
import ListaDePosts from "../ListaDePosts";
import PaginaDePost from "../PaginaDePost";



const routes = {
  root: "/",
  cadastro: "/cadastro",
  listaDePosts: "/listaDePosts",
  paginaDePost: "/paginaDePost",

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.cadastro} component={Cadastro} />
        <Route exact path={routes.listaDePosts} component={ListaDePosts} />
        <Route exact path={routes.paginaDePost} component={PaginaDePost} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
