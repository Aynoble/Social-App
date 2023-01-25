import "./navBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

function NavBar() {
  const { toggle } = useContext(DarkModeContext);
  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>aysocial</span>
        </Link>
        <HomeOutlinedIcon style={{ cursor: "pointer" }} />
        <DarkModeOutlinedIcon onClick={toggle} style={{ cursor: "pointer" }} />
        <GridViewOutlinedIcon style={{ cursor: "pointer" }} />
        <div className="search">
          <SearchOutlinedIcon style={{ cursor: "pointer" }} />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon style={{ cursor: "pointer" }} />
        <EmailOutlinedIcon style={{ cursor: "pointer" }} />
        <NotificationsOutlinedIcon style={{ cursor: "pointer" }} />
        <div className="user" style={{ cursor: "pointer" }}>
          <img
            src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <span>Ayomide</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
