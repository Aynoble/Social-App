import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./createPost.scss";
import image from "../../img/img.png";
import friends from "../../img/1.png";
import map from "../../img/map.png";
import { DarkModeContext } from "../../context/darkModeContext";

function CreatePost() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "dark" : "light"} createPost`}>
      <div className="createPost__container">
        <div className="top">
          <img src={currentUser.profilePic} alt="" />
          <input
            type="text"
            placeholder={`What's on your mind ${currentUser.name}?`}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="items">
            <div className="item">
              <img src={image} alt="" />
              <span>Add Image</span>
            </div>
            <div className="item">
              <img src={map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={friends} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
