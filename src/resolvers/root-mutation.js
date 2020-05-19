import UserMutations from "./mutations/user.mutation";
import PostMutations from "./mutations/post.mutation";
import CommentMutations from "./mutations/comment.mutation";

export default {
  ...UserMutations,
  ...PostMutations,
  ...CommentMutations,
};
