import { Link } from "react-router-dom";
import "./register.scss";

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Ay Social.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            sagittis metus sit amet nunc ornare dapibus. In sed eleifend diam.
            Praesent massa tellus, ornare in lorem et, sollicitudin porttitor
            mauris.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            {" "}
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
