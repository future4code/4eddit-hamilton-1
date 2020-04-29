import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import axios from "axios";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onClickSubmit = (event) => {
    this.setState(this.state.value);
    event.preventDefault();
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.login();
    this.props.goToPaginaDePost();
  };

  login = async () => {
    const body = { email: this.state.email, password: this.state.password };
    const response = await axios.post(
      "https://us-central1-future-apis.cloudfunctions.net/fourEddit/login",
      body
    );
    console.log(response);
    localStorage.setItem("token", response.data.token);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email:</label>
          <input
            required
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <label>Password:</label>
          <input
            required
            name="name"
            type="password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />
          <button type="submit" value="Entrar">
            Entrar
          </button>
        </form>
        <button onClick={this.props.goToSignUp}>Cadastrar</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    goToSignUp: () => dispatch(push(routes.cadastro)),
    goToPaginaDePost: () => dispatch(push(routes.paginaDePost)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
