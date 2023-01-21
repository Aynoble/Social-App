import { Link } from "react-router-dom";
import "./login.scss";

function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            sagittis metus sit amet nunc ornare dapibus. In sed eleifend diam.
            Praesent massa tellus, ornare in lorem et, sollicitudin porttitor
            mauris.
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            {" "}
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
