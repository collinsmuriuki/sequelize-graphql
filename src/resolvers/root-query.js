import UserQueries from "./queries/user.query";
import PostQueries from "./queries/post.query";
import CommentQueries from "./queries/comment.query";

export default {
  ...UserQueries,
  ...PostQueries,
  ...CommentQueries,
};
