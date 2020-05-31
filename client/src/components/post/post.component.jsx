import React from "react";
import { Segment } from "semantic-ui-react";

import Comments from "../comments/comments.component";

const Post = ({ post }) => {
  return (
    <>
      <Segment attached>{post.body}</Segment>
      <Comments comments={post.comments} />
    </>
  );
};

export default Post;
