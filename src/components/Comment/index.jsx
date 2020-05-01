import React, { Component } from "react";
import styled from "styled-components";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import { RateButton } from "../global-style";

export default class index extends Component {
  render() {
    const { comment } = this.props;
    return (
      <PostComment>
        <CommentUser>
          {comment.user} <CommentPoints> {comment.points} points</CommentPoints>
        </CommentUser>
        <CommentText>{comment.text}</CommentText>
        <CommentRating>
          <CommentRateBtn>
            <GoArrowUp color="#999" size="20px" />
          </CommentRateBtn>
          <CommentRateBtn>
            <GoArrowDown color="#999" size="20px" />
          </CommentRateBtn>
        </CommentRating>
      </PostComment>
    );
  }
}

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
