import React, { Component } from "react";
import styled from "styled-components";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import { FaCommentAlt } from "react-icons/fa";

const postMock = [
  {
    title: "Título",
    user: "Usuário",
    text:
      "Texto legal sdasd asd sa dasd adasd asdsa sa dasadasd asdsa sa dasd adasd asdsa sa dasd adasdasdsa sa dasd adasd asdsa",
    votes: 5,
    comments: 3,
  },
];

export default class PostsPage extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Logo src={require("../../imgs/logo.png")} />
          <LogoutBtn>Logout</LogoutBtn>
        </Header>
        <Main>
          <Form as="form">
            <InputField placeholder="Title" />
            <InputField as="TextArea" placeholder="Text" />
            <Btn type="submit">Post</Btn>
          </Form>
          {postMock.map((post) => (
            <Post>
              <RateBar>
                <RateButton>
                  <GoArrowUp color="#fff" size="20px" />
                </RateButton>
                <RatePoints>{post.votes}</RatePoints>
                <RateButton>
                  <GoArrowDown color="#fff" size="20px" />
                </RateButton>
              </RateBar>
              <PostContent>
                <PostUser>{post.title}</PostUser>
                <PostText>{post.text}</PostText>
                <PostActions>
                  <PostButton>
                    <FaCommentAlt />
                    {post.comments} Comments
                  </PostButton>
                </PostActions>
                <InputField
                  as="TextArea"
                  placeholder="What are your thoughts?"
                />
                <Btn type="submit">Comment</Btn>
              </PostContent>
              <PostComment>
                <CommentUser>
                  Darvas <CommentPoints> 10 points</CommentPoints>
                </CommentUser>
                <CommentText>
                  Comentário muito <br />
                  Comentário muito <br />
                  Comentário muito <br />
                  Comentário muito <br />
                  Comentário muito <br />
                </CommentText>
                <CommentRating>
                  <CommentRateBtn>
                    <GoArrowUp color="#999" size="20px" />
                  </CommentRateBtn>
                  <CommentRateBtn>
                    <GoArrowDown color="#999" size="20px" />
                  </CommentRateBtn>
                </CommentRating>
              </PostComment>
            </Post>
          ))}
        </Main>
      </Container>
    );
  }
}

const Btn = styled.button.attrs((props) => ({
  bg: props.inverted ? "transparent" : "#ed7f61",
  fc: props.inverted ? "#ed7f61" : "white",
}))`
  border: 1px solid #ed7f61;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.fc};
  font-size: 14px;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 48px 1fr;

  background-color: #dae0e6;
`;

const Header = styled.header`
  position: relative;
  background-color: #ed7f61;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  padding: 4px 16px;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`;

const LogoutBtn = styled(Btn)``;

const Logo = styled.img`
  height: 100%;
  cursor: pointer;
`;

const Main = styled.main`
  padding: 24px;
  display: grid;
  justify-items: center;
  align-items: flex-start;
  align-content: flex-start;
  row-gap: 8px;
`;

const DefaultBox = styled.div`
  width: 100%;
  max-width: 640px;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
`;

const Form = styled(DefaultBox)`
  padding: 16px;
  display: grid;
  row-gap: 16px;
`;

const InputField = styled.input`
  border: 1px solid #eee;
  width: 100%;
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  resize: none;

  &:focus {
    border-color: #999;
  }
`;

const Post = styled(DefaultBox)`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 40px 1fr;
  border: 1px solid #fff;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    border: 1px solid #999;
    transform: translateY(-3px);
    box-shadow: 1px 3px 2px rgba(0, 0, 0, 0.3);
  }
`;

const RateBar = styled.div`
  position: relative;
  z-index: 10;
  /* background-color: #f7f9fa; */
  background-color: #ed7f61;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 24px);
  justify-items: center;
  align-items: center;
  border-bottom-right-radius: 40px;

  padding: 8px 4px;
`;

const RateButton = styled.div`
  border-radius: 4px;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 24px;
  height: 24px;

  &:hover {
    border: 2px solid white;
  }
`;

const RatePoints = styled.p`
  color: #fff;
  font-weight: bold;
`;

const PostContent = styled.div`
  padding: 8px;
  display: grid;
  justify-items: flex-start;
  align-items: flex-start;
  row-gap: 8px;
`;

const PostUser = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;
const PostText = styled.p`
  margin: 0;
`;

const PostActions = styled.div`
  display: grid;
  align-items: center;
`;

const PostButton = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  color: #999;
  padding: 4px;
  border-radius: 4px;
  font-size: 12px;

  &:hover {
    background-color: #eee;
  }
`;

const PostComment = styled.div`
  position: relative;
  width: 100%;
  grid-column: 1/3;
  border-left: 2px solid #ddd;
  margin: 24px 0;
  margin-left: 20px;
  padding-left: 20px;
`;

const CommentUser = styled.p`
  margin: 0;
  font-size: 12px;
`;

const CommentPoints = styled.span`
  color: #aaa;
`;

const CommentText = styled.p`
  margin: 0;
  font-size: 16px;
`;

const CommentRating = styled.div`
  position: absolute;
  top: 0;
  left: -13px;
`;

const CommentRateBtn = styled(RateButton)`
  background-color: #fff;

  &:hover {
    background-color: #ddd;
  }
`;
