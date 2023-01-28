import React from "react";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  );
}

export default Home;
