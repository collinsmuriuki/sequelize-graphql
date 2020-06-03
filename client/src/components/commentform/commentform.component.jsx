import React, { useState } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import { gql } from "apollo-boost";

const POST_COMMENT = gql`
  mutation($data: CreateCommentInput!) {
    createComment(data: $data) {
      text
      user {
        firstName
        lastName
      }
    }
  }
`;

const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;

const CommentForm = ({ postId, match }) => {
  const [comment, setComment] = useState({
    text: "",
  });
  const [formError, setFormError] = useState(false);
  const {
    data: { currentUser },
  } = useQuery(GET_CURRENT_USER);
  const [createComment, { error, loading }] = useMutation(POST_COMMENT, {
    onCompleted({ createComment }) {},
    onError() {
      setFormError(true);
    },
    variables: {
      data: {
        userId: Number(currentUser ? currentUser.id : null),
        postId: Number(match.params.postId),
        text: comment.text,
      },
    },
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setComment({ [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createComment();
    setComment({ text: "" });
  };

  return (
    <Form onSubmit={handleSubmit} reply>
      {formError && (
        <Message negative>
          <p>{error ? error.toString() : "An error has occurred"}</p>
        </Message>
      )}
      <Form.TextArea name="text" value={comment.text} onChange={handleChange} />
      <Button
        loading={loading ? true : false}
        content="Add Comment"
        labelPosition="left"
        icon="edit"
        primary
      />
    </Form>
  );
};

export default withRouter(CommentForm);
