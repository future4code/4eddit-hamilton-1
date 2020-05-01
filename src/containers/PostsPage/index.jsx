import React, { Component } from "react";
import styled from "styled-components";
import Post from "../../components/Post";
import Header from "../../components/Header";
import CreatePostForm from "../../components/CreatePostForm";

const postMock = [
  {
    title: "Título",
    user: "Usuário",
    text:
      "Texto legal sdasd asd sa dasd adasd asdsa sa dasadasd asdsa sa dasd adasd asdsa sa dasd adasdasdsa sa dasd adasd asdsa",
    votes: 5,
    comments: [
      {
        user: "Darvas",
        text: "Comentário muito bom",
        points: 10,
      },
    ],
  },
];

export default class PostsPage extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Main>
          <CreatePostForm />
          {postMock.map((post) => (
            <Post post={post} />
          ))}
        </Main>
      </Container>
    );
  }
}

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
