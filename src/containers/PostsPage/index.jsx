import React, { Component } from "react";
import styled from "styled-components";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import { FaCommentAlt } from "react-icons/fa";

export default class PostsPage extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Logo src={require("../../imgs/logo.png")} />
        </Header>
        <Main>
          <Post>
            <RateBar>
              <RateButton>
                <GoArrowUp color="#999" size="20px" />
              </RateButton>
              {50}
              <RateButton>
                <GoArrowDown color="#999" size="20px" />
              </RateButton>
            </RateBar>
            <PostContent>
              <PostUser>Darvas</PostUser>
              <PostText>
                Texto legal sdasd asd sa <br /> dasd adasd asdsa sa <br /> dasd
                adasd asdsa sa <br /> dasd adasd asdsa sa <br /> dasd adasd
                asdsa sa <br /> dasd adasd asdsa
              </PostText>
              <PostActions>
                <PostButton>
                  <FaCommentAlt />3 Comments
                </PostButton>
              </PostActions>
            </PostContent>
          </Post>
          <Post>
            <RateBar>
              <RateButton>
                <GoArrowUp color="#999" size="20px" />
              </RateButton>
              {50}
              <RateButton>
                <GoArrowDown color="#999" size="20px" />
              </RateButton>
            </RateBar>
            <PostContent>
              <PostUser>Darvas</PostUser>
              <PostText>
                Texto legal sdasd asd sa <br /> dasd adasd asdsa sa <br /> dasd
                adasd asdsa sa <br /> dasd adasd asdsa sa <br /> dasd adasd
                asdsa sa <br /> dasd adasd asdsa
              </PostText>
              <PostActions>
                <PostButton>
                  <FaCommentAlt />3 Comments
                </PostButton>
              </PostActions>
            </PostContent>
          </Post>
          <Post>
            <RateBar>
              <RateButton>
                <GoArrowUp color="#999" size="20px" />
              </RateButton>
              {50}
              <RateButton>
                <GoArrowDown color="#999" size="20px" />
              </RateButton>
            </RateBar>
            <PostContent>
              <PostUser>Darvas</PostUser>
              <PostText>
                Texto legal sdasd asd sa <br /> dasd adasd asdsa sa <br /> dasd
                adasd asdsa sa <br /> dasd adasd asdsa sa <br /> dasd adasd
                asdsa sa <br /> dasd adasd asdsa
              </PostText>
              <PostActions>
                <PostButton>
                  <FaCommentAlt />3 Comments
                </PostButton>
              </PostActions>
            </PostContent>
          </Post>
          <Post>
            <RateBar>
              <RateButton>
                <GoArrowUp color="#999" size="20px" />
              </RateButton>
              {50}
              <RateButton>
                <GoArrowDown color="#999" size="20px" />
              </RateButton>
            </RateBar>
            <PostContent>
              <PostUser>Darvas</PostUser>
              <PostText>
                Texto legal sdasd asd sa <br /> dasd adasd asdsa sa <br /> dasd
                adasd asdsa sa <br /> dasd adasd asdsa sa <br /> dasd adasd
                asdsa sa <br /> dasd adasd asdsa
              </PostText>
              <PostActions>
                <PostButton>
                  <FaCommentAlt />3 Comments
                </PostButton>
              </PostActions>
            </PostContent>
          </Post>
          <Post>
            <RateBar>
              <RateButton>
                <GoArrowUp color="#999" size="20px" />
              </RateButton>
              {50}
              <RateButton>
                <GoArrowDown color="#999" size="20px" />
              </RateButton>
            </RateBar>
            <PostContent>
              <PostUser>Darvas</PostUser>
              <PostText>
                Texto legal sdasd asd sa <br /> dasd adasd asdsa sa <br /> dasd
                adasd asdsa sa <br /> dasd adasd asdsa sa <br /> dasd adasd
                asdsa sa <br /> dasd adasd asdsa
              </PostText>
              <PostActions>
                <PostButton>
                  <FaCommentAlt />3 Comments
                </PostButton>
              </PostActions>
            </PostContent>
          </Post>
          <Post>
            <RateBar>
              <RateButton>
                <GoArrowUp color="#999" size="20px" />
              </RateButton>
              {50}
              <RateButton>
                <GoArrowDown color="#999" size="20px" />
              </RateButton>
            </RateBar>
            <PostContent>
              <PostUser>Darvas</PostUser>
              <PostText>
                Texto legal sdasd asd sa <br /> dasd adasd asdsa sa <br /> dasd
                adasd asdsa sa <br /> dasd adasd asdsa sa <br /> dasd adasd
                asdsa sa <br /> dasd adasd asdsa
              </PostText>
              <PostActions>
                <PostButton>
                  <FaCommentAlt />3 Comments
                </PostButton>
              </PostActions>
            </PostContent>
          </Post>
          <Post>
            <RateBar>
              <RateButton>
                <GoArrowUp color="#999" size="20px" />
              </RateButton>
              {50}
              <RateButton>
                <GoArrowDown color="#999" size="20px" />
              </RateButton>
            </RateBar>
            <PostContent>
              <PostUser>Darvas</PostUser>
              <PostText>
                Texto legal sdasd asd sa <br /> dasd adasd asdsa sa <br /> dasd
                adasd asdsa sa <br /> dasd adasd asdsa sa <br /> dasd adasd
                asdsa sa <br /> dasd adasd asdsa
              </PostText>
              <PostActions>
                <PostButton>
                  <FaCommentAlt />3 Comments
                </PostButton>
              </PostActions>
            </PostContent>
          </Post>
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

const Header = styled.header`
  background-color: #ed7f61;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  padding: 4px 16px;
`;

const Logo = styled.img`
  height: 100%;
  cursor: pointer;
`;

const Main = styled.main`
  padding: 24px;
  display: grid;
  justify-items: center;
  align-items: flex-start;
  row-gap: 8px;
`;

const Post = styled.div`
  width: 100%;
  max-width: 640px;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  display: grid;
  grid-template-columns: 40px 1fr;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);

  &:hover {
    border: 1px solid #999;
  }
`;

const RateBar = styled.div`
  background-color: #f7f9fa;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 24px);
  justify-items: center;
  align-items: center;

  padding: 8px 4px;
`;

const RateButton = styled.div`
  border-radius: 4px;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 24px;
  height: 100%;

  &:hover {
    background-color: #ddd;
  }
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
