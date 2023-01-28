import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

function Stories() {
  const stories = [
    {
      id: 1,
      name: "Marvellous",
      img: "https://images.unsplash.com/photo-1673946723153-4994870b64e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Josiah",
      img: "https://images.unsplash.com/photo-1674223634714-83bc6d488615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Paul",
      img: "https://images.unsplash.com/photo-1674035895575-b7309b268f75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Joshua",
      img: "https://images.unsplash.com/photo-1672661164570-d5e7e0890a69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
