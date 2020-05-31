import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Navbar from "./navbar.component";

const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;

const NavbarContainer = () => {
  const { data } = useQuery(GET_CURRENT_USER);

  return <Navbar currentUser={data.currentUser} />;
};

export default NavbarContainer;
