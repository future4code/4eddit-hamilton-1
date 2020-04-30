import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import axios from "axios";

class ListaDePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      title: "",
      text: "",
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token === null) this.props.goToLoginPage();

    this.getPosts();
  }

  getPosts = async () => {
    const list = await axios.get(
      "https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts",
      {
        headers: {
          auth: localStorage.getItem("token"),
        },
      }
    );

    this.setState({
      posts: list.data.posts,
    });
  };

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  createPost = async () => {
    const body = {
      text: this.state.text,
      title: this.state.title,
    };

    await axios.post(
      "https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts",
      body,
      {
        headers: {
          auth: localStorage.getItem("token"),
        },
      }
    );

    this.getPosts();
  };

  getPostDetails = async (postId) => {
    const response = await axios.get(
      `https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts/${postId}`,
      {
        headers: {
          auth: localStorage.getItem("token"),
        },
      }
    );

    this.setState({
      posts: this.state.posts.map((post) =>
        post.id !== postId
          ? post
          : {
              ...post,
              comments: response.data.post.comments,
            }
      ),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.createPost();
  };

  render() {
    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
            margin: "20px",
          }}
        >
          <input
            value={this.state.title}
            onChange={this.handleTitleChange}
            placeholder="title"
          />
          <textarea
            value={this.state.text}
            onChange={this.handleTextChange}
            placeholder="text"
          />
          <button type="submit">Postar</button>
        </form>
        {this.state.posts.map((post) => (
          <div style={{ margin: "20px" }}>
            Usuário: {post.username}
            <br />
            Título: {post.title}
            <br />
            Texto: {post.text}
            <br />
            <button onClick={() => this.getPostDetails(post.id)}>
              Comentários
            </button>
            {post.comments &&
              post.comments.map((comment) => (
                <p>
                  {comment.username}: {comment.text}
                </p>
              ))}
          </div>
        ))}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToPostsPage: () => dispatch(push(routes.paginaDePost)),
  };
};

export default connect(null, mapDispatchToProps)(ListaDePosts);
