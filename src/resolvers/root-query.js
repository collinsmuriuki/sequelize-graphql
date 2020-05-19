import UserQueries from "./queries/user.query";
import PostQueries from "./queries/post.query";

export default {
  ...UserQueries,
  ...PostQueries,
};
