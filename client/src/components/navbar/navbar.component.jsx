import React from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const LinkMod = styled(Link)`
  padding-top: 4px;

  &:hover {
    color: #888;
  }
`;

const Navbar = ({ currentUser, history }) => {
  return (
    <Menu secondary>
      <LinkMod to="/">
        <Menu.Item name="home" />
      </LinkMod>
      <LinkMod to="/">
        <Menu.Item name="users" />
      </LinkMod>
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        {currentUser ? (
          <>
            <LinkMod to="/">
              <Menu.Item name="profile" />
            </LinkMod>

            <Menu.Item
              name="logout"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            />
          </>
        ) : (
          <LinkMod to="/auth">
            <Menu.Item name="sign up" />
          </LinkMod>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(Navbar);
