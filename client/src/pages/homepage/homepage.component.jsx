import React from "react";

import Hero from "../../components/hero/hero.component";
import PostFeed from "../../components/postfeed/postfeed.component";
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
