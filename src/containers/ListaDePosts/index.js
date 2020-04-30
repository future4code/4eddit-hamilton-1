import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

class ListaDePosts extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
 list = async () => {
   const body = {}
   const list = await axios.get("https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts", body);
    setItem("auth", list.data.post)
}
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
  