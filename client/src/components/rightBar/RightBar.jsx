import "./rightBar.scss";

function RightBar() {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggested For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <span>Ayomide</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
