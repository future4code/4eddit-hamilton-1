import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history)
    // cadastro: connectCadastro(history)
    // listaDePosts: connectListaDePosts(history)
    // paginaDePost: connectPaginaDePost(history)

    // Outros reducers aqui
  });
