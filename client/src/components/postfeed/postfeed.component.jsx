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
        <Feed.Content>
          <Feed.Summary>
            <LinkMod>
              <strong>Some Post</strong>
            </LinkMod>
            <small>Elliot Fu</small>
            <Feed.Date>1 Hour Ago</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>
            Ours is a life of constant reruns. We're always circling back to
            where we'd we started, then starting all over again. Even if we
            don't run extra laps that day, we surely will come back for more of
            the same another day soon.
          </Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Icon name="comment" />4 Comments
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
};

export default PostFeed;
