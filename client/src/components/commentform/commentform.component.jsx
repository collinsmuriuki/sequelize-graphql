import React from "react";
import { Form, Button } from "semantic-ui-react";

const CommentForm = () => {
  return (
    <Form reply>
      <Form.TextArea />
      <Button content="Add Comment" labelPosition="left" icon="edit" primary />
    </Form>
  );
};

export default CommentForm;
