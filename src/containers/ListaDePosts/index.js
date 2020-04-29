import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

class ListaDePosts extends Component {
    render() {
      return ( 
    <form>
      <textarea></textarea>
      <button onClick={this.props.goToPostsPage}>Postar</button>
    </form>
      
      );
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    goToPostsPage: () => dispatch(push(routes.paginaDePost)),
  };
};





  
  export default connect(null, mapDispatchToProps)(ListaDePosts);
  