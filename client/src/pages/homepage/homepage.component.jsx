import React from "react";

import Hero from "../../components/hero/hero.component";
import { default as PostFeed } from "../../components/postfeed/postfeed.container";
import PostForm from "../../components/postform/postform.component";

const HomePage = () => {
  return (
    <>
      <Hero icon={"bolt"} headerMessage={"Post Feed"} />
      <PostForm />
      <PostFeed />
    </>
  );
};

export default HomePage;
