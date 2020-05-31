import React from "react";
import { Comment, Header } from "semantic-ui-react";
import styled from "styled-components";

import CommentForm from "../commentform/commentform.component";

const CommentFormMod = styled(CommentForm)`
  display: block;
  margin: 0 auto;
`;

const Comments = ({ comments }) => {
  return (
    <Comment.Group>
      <Header as="h3">
        Comments
      </Header>
      {comments.map((comment) => (
        <Comment key={comment.id}>
          <Comment.Content>
            <Comment.Author>
              {comment.user.firstName} {comment.user.lastName}
            </Comment.Author>
            <Comment.Text>
              <p>{comment.text}</p>
            </Comment.Text>
          </Comment.Content>
        </Comment>
      ))}
      <CommentFormMod />
    </Comment.Group>
  );
};

export default Comments;
