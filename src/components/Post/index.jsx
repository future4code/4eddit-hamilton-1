import React, { Component } from "react";
import styled from "styled-components";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import { FaCommentAlt } from "react-icons/fa";
import { Btn, InputField, DefaultBox, RateButton } from "../global-style";
import Comment from "../Comment";

export default class index extends Component {
  render() {
    const { post } = this.props;
    return (
      <Container>
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
          <PostUser>Posted by {post.user}</PostUser>
          <PostTitle>{post.title}</PostTitle>
          <PostText>{post.text}</PostText>
          <PostActions>
            <PostButton>
              <FaCommentAlt />
              {post.comments.length} Comments
            </PostButton>
          </PostActions>
          <InputField as="TextArea" placeholder="What are your thoughts?" />
          <Btn type="submit">Comment</Btn>
        </PostContent>
        {post.comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </Container>
    );
  }
}

const Container = styled(DefaultBox)`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 40px 1fr;
  border: 1px solid #fff;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    border: 1px solid #999;
    transform: translateY(-4px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const RateBar = styled.div`
  position: relative;
  top: -4px;
  left: -8px;
  z-index: 1;
  /* background-color: #f7f9fa; */
  background-color: #ed7f61;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 24px);
  justify-items: center;
  align-items: center;
  border-bottom-right-radius: 40px;
  border-top-left-radius: 4px;
  box-shadow: 7px 3px 10px rgba(0, 0, 0, 0.2);

  padding: 8px 4px;
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
  color: #999;
  font-size: 12px;
`;

const PostTitle = styled.p`
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

const RatePoints = styled.p`
  color: #fff;
  font-weight: bold;
`;
