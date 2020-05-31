import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Loader } from "semantic-ui-react";

import PostFeed from "./postfeed.component";

const GET_POSTS = gql`
  {
    posts(order: DESC) {
      id
      title
      body
      createdAt
      user {
        firstName
        lastName
      }
      comments {
        id
        text
        user {
          firstName
          lastName
        }
      }
    }
  }
`;

const PostFeedContainer = () => {
  const {data, loading} = useQuery(GET_POSTS);
  if (loading) return <Loader active inline='centered' />
  return <PostFeed posts={data.posts} />;
};

export default PostFeedContainer;
