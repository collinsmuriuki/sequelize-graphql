import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Loader } from "semantic-ui-react";

import Hero from "../../components/hero/hero.component";
import Post from "../../components/post/post.component";
import Author from "../../components/author/author.component";

const GET_POST = gql`
  query($postId: Int!) {
    getPostById(id: $postId) {
      title
      body
      user {
        id
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

const SinglePost = ({ match }) => {
  const { data, loading } = useQuery(GET_POST, {
    variables: { postId: Number(match.params.postId) },
  });
  if (loading) return <Loader active inline="centered" />;
  console.log(data);
  return (
    <>
      <Hero icon="book" headerMessage={data.getPostById.title} />
      <Author user={data.getPostById.user} />
      <Post post={data.getPostById} />
    </>
  );
};

export default SinglePost;
