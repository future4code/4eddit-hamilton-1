import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

class PaginaDePost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token === null) this.props.goToLoginPage();
  }
  render() {
    return (
      <div>
        <button onClick={this.props.goToLoginPage}>Login</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToLoginPage: () => dispatch(push(routes.root)),
  };
};

export default connect(null, mapDispatchToProps)(PaginaDePost);
