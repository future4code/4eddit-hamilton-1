import React, { Component } from "react";
import styled from "styled-components";
import Post from "../../components/Post";
import Header from "../../components/Header";
import CreatePostForm from "../../components/CreatePostForm";
import { getPosts } from "../../actions/post";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import { routes } from "../Router";
import { Btn } from "../../components/global-style";

// commentsCount: 34
// createdAt: 1585748516971
// id: "0COaXIBbosGCvdIMNv9Y"
// text: "E ele morreu!"
// title: "Atirei o pau no gato!"
// userVoteDirection: 0
// username: "SeiLa"
// votesCount: 8

class PostsPage extends Component {
  state = {
    numberOfPost: 10,
  };

  componentDidMount() {
    if (localStorage.getItem("token") === null) this.props.goToLogin();
    else this.props.fecthPosts();
  }

  loadMorePosts = () => {
    this.setState({
      numberOfPost: this.state.numberOfPost + 10,
    });
  };

  render() {
    const { postList } = this.props;
    const { numberOfPost } = this.state;

    return (
      <Container>
        <Header />
        <Main>
          <CreatePostForm />
          {postList.slice(0, numberOfPost).map((post) => (
            <Post key={post.id} post={post} />
          ))}
          {postList.length > numberOfPost && (
            <LoadBtn onClick={this.loadMorePosts}>Load More</LoadBtn>
          )}
        </Main>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  postList: state.post.list,
});

const mapDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(replace(routes.root)),
  fecthPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 48px 1fr;

  background-color: #dae0e6;
`;

const Main = styled.main`
  padding: 24px;
  display: grid;
  justify-items: center;
  align-items: flex-start;
  align-content: flex-start;
  row-gap: 8px;
`;

const LoadBtn = styled(Btn)`
  width: 100%;
  max-width: 640px;
`;
