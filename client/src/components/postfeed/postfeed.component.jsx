import React from "react";
import { Feed, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const LinkMod = styled(Link)`
  display: block;
`;

const PostFeed = ({ posts }) => {
  return (
    <Feed size="large">
      <Feed.Event>
        {posts.map((post) => (
          <Feed.Content key={post.id}>
            <Feed.Summary>
              <LinkMod>
                <strong>{post.title}</strong>
              </LinkMod>
              <small>
                {post.user.firstName} {post.user.lastName}
              </small>
              <Feed.Date>
                {new Date(post.createdAt).toLocaleDateString()}
              </Feed.Date>
            </Feed.Summary>
            <Feed.Extra text>{post.body}</Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="comment" />
                {post.comments.length} comment(s)
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        ))}
      </Feed.Event>
    </Feed>
  );
};

export default PostFeed;
