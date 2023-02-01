import React, { useContext } from "react";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import "./home.scss";
import "../../style.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import CreatePost from "../../components/createPost/CreatePost";

function Home() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "dark" : "light"} home`}>
      <Stories />
      <CreatePost />
      <Posts />
    </div>
  );
}

export default Home;
