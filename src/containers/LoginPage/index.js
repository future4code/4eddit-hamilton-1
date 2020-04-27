import React, { Component } from "./node_modules/react";


class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  onClickSubmit(event) {
    this.setState(this.state.value);
    event.preventDefault();
  }
  
render() {
  return (
    <div>
      <form>
        <label>Email:</label>
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
          <label>Password:</label>
          <input type="number" value={this.state.value} onChange={this.handleChange} />
          <button type="submit" value="Entrar">Entrar</button>
          <button>Cadastrar</button>
      </form>
    </div>
  );
}
}
export default LoginPage;
