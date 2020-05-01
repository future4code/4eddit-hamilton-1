import React, { Component } from "react";
import styled from "styled-components";
import { DefaultBox, Btn, InputField } from "../global-style";

export default class CreatePostForm extends Component {
  render() {
    return (
      <Form as="form">
        <InputField placeholder="Title" />
        <InputField as="TextArea" placeholder="Text" />
        <Btn type="submit">Post</Btn>
      </Form>
    );
  }
}

const Form = styled(DefaultBox)`
  padding: 16px;
  display: grid;
  row-gap: 16px;
`;
