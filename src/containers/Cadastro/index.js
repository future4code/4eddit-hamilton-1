import React, { Component } from "react";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { connect} from "react-redux";

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      password: "",
    };
  }
  onChangeName = (event) => {
    this.setState({
      nome: event.target.value,
    });
  };
  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  onChangeSenha = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  
  render() {
    return (
      <div>
        <form>
          <label>Nome de usuário</label>
          <input
            required
            name="nome"
            type="text"
            onChange={this.onChangeName}
            value={this.state.nome}
          />
          <label>Email:</label>
          <input
            required
            name="email"
            type="email"
            onChange={this.onChangeEmail}
            value={this.state.email}
          />
          <label>Senha:</label>
          <input
            required
            name="password"
            type="password"
            onChange={this.onChangeSenha}
            value={this.state.password}
          />
          <button onClick={this.props.goToPosts}>Cadastrar</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToPosts: () => dispatch(push(routes.listaDePosts))
    }
}

export default connect(null, mapDispatchToProps)(Cadastro);
