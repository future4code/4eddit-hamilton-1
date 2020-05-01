import React, { Component } from "react";
import { FaCommentAlt } from "react-icons/fa";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import styled from "styled-components";
import Comment from "../Comment";
import { Btn, DefaultBox, InputField, RateButton } from "../global-style";
import moment from "moment/moment";
import { vote } from "../../actions/post";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    const { post, vote } = this.props;
    return (
      <Container>
        <RateBar>
          <RateButton
            onClick={() => vote(post.id, post.userVoteDirection === 1 ? 0 : 1)}
          >
            <GoArrowUp
              color={post.userVoteDirection !== 1 ? "#fff" : "#555"}
              size="20px"
            />
          </RateButton>
          <RatePoints>{post.votesCount}</RatePoints>
          <RateButton
            onClick={() =>
              vote(post.id, post.userVoteDirection === -1 ? 0 : -1)
            }
          >
            <GoArrowDown
              color={post.userVoteDirection !== -1 ? "#fff" : "#555"}
              size="20px"
            />
          </RateButton>
        </RateBar>
        <PostContent>
          <PostUser>
            Posted by {post.username}{" "}
            {moment(post.createdAt).startOf("hour").fromNow()}{" "}
          </PostUser>
          <PostTitle>{post.title}</PostTitle>
          <PostText>{post.text}</PostText>
          <PostActions>
            <PostButton>
              <FaCommentAlt />
              {post.commentsCount} Comments
            </PostButton>
          </PostActions>
          {/* <InputField as="TextArea" placeholder="What are your thoughts?" />
          <Btn type="submit">Comment</Btn> */}
        </PostContent>
        {/* {post.comments.map((comment) => (
          <Comment comment={comment} />
        ))} */}
      </Container>
    );
  }
}

const dispatchToProps = {
  vote: (postId, dir) => vote(postId, dir),
};

export default connect(null, dispatchToProps)(Post);

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
