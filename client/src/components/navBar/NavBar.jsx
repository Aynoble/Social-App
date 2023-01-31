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
import { AuthContext } from "../../context/authContext";

function NavBar() {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>aysocial</span>
        </Link>
        <HomeOutlinedIcon style={{ cursor: "pointer" }} className="homeIcon" />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} style={{ cursor: "pointer" }} />
        ) : (
          <DarkModeOutlinedIcon
            onClick={toggle}
            style={{ cursor: "pointer" }}
          />
        )}

        <GridViewOutlinedIcon style={{ cursor: "pointer" }} className="grid" />
        <div className="search">
          <SearchOutlinedIcon style={{ cursor: "pointer" }} />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon
          style={{ cursor: "pointer" }}
          className="addFriendsIcon"
        />
        <EmailOutlinedIcon style={{ cursor: "pointer" }} />
        <NotificationsOutlinedIcon style={{ cursor: "pointer" }} />
        <div className="user" style={{ cursor: "pointer" }}>
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
