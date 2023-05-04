import classes from "./DesktopNavMenu.module.css";
import { NavLink } from "react-router-dom";

const desktopNavMenu = () => {
  return (
    <ul className={classes["navigation-items-desktop"]}>
      <li className={classes["nav-button"]}>
        <NavLink to="/" exact activeClassName={classes["active-desktop"]}>
          Home
        </NavLink>
      </li>
      <li className={classes["nav-button"]}>
        <NavLink to="/about" activeClassName={classes["active-desktop"]}>
          About
        </NavLink>
      </li>
      <li className={classes["nav-button"]}>
        <NavLink to="/work-exp" activeClassName={classes["active-desktop"]}>
          Work experience
        </NavLink>
      </li>
      <li className={classes["nav-button"]}>
        <NavLink to="/blogs" activeClassName={classes["active-desktop"]}>
          Blogs
        </NavLink>
      </li>
    </ul>
  );
};

export default desktopNavMenu;
