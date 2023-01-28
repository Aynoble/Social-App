import { useContext } from "react";
import { AuthContext } from "../../context/authContext.js";
import Post from "../post/Post.jsx";
import "./posts.scss";

function Posts() {
  const { currentUser } = useContext(AuthContext);
  const posts = [
    {
      id: 1,
      name: currentUser.name,
      userId: currentUser.id,
      profilePic: currentUser.profilePic,
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      img: "https://images.unsplash.com/photo-1673787454428-69d1689cbac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Marvellous",
      userId: 22,
      profilePic:
        "https://github.com/Aynoble/Portfolio-Website/blob/main/img/Marvellous%20Adelaja.jpg?raw=true",
      desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}

export default Posts;
