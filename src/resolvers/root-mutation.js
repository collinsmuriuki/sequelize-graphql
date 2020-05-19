import UserMutations from "./mutations/user.mutation";
import PostMutations from "./mutations/post.mutation";

export default {
  ...UserMutations,
  ...PostMutations,
};
