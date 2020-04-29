import React, { Component } from "react";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { connect } from "react-redux";
import axios from "axios";

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      password: "",
    };
  }
handleSubmit = () => {
  this.cadastro()
  this.props.goToPosts()
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

  cadastro = async () =>  {
    const body = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.nome,
    };
    const cadastro = await axios.post("https://us-central1-future-apis.cloudfunctions.net/fourEddit/signup", body);
      localStorage.setItem("token", cadastro.data.token)
    console.log(cadastro)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    goToPosts: () => dispatch(push(routes.listaDePosts)),
  };
};

export default connect(null, mapDispatchToProps)(Cadastro);
