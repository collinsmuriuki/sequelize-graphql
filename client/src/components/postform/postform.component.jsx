import React, { Component } from "react";
import { Button, Form, Icon, Modal } from "semantic-ui-react";
import styled from "styled-components";

const ButtonMod = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class PostForm extends Component {
  render() {
    return (
      <Modal trigger={<ButtonMod>Show Modal</ButtonMod>} centered={false}>
        <Modal.Header>Create Post</Modal.Header>
        <Modal.Content>
          <Form onSubmit={() => console.log("cc")}>
            <Form.Field>
              <input placeholder="Title" />
            </Form.Field>
            <Form.TextArea placeholder="Write your post..." />
            <Button type="submit" color="green">
                <Icon name="checkmark" /> Submit
              </Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}
