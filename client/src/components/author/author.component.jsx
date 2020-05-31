import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  text-align: center;
`;

const Author = ({ user }) => {
  return (
    <Container>
      By <Icon name="user" /> {user.firstName} {user.lastName}
    </Container>
  );
};

export default Author;
