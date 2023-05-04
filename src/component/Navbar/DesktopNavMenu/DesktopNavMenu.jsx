import classes from "./desktopNavMenu.module.css";
import { NavLink } from "react-router-dom";

const desktopNavMenu = () => {
  return (
    <ul className={classes["navigation-items-desktop"]}>
      <li className={classes["nav-button"]}>
        <NavLink
          to="/"
          exact
          className={({ isActive }) =>
            isActive ? classes["active-desktop"] : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className={classes["nav-button"]}>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? classes["active-desktop"] : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className={classes["nav-button"]}>
        <NavLink
          to="/work-exp"
          className={({ isActive }) =>
            isActive ? classes["active-desktop"] : ""
          }
        >
          Work experience
        </NavLink>
      </li>
      <li className={classes["nav-button"]}>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? classes["active-desktop"] : ""
          }
        >
          Blogs
        </NavLink>
      </li>
    </ul>
  );
};

export default desktopNavMenu;
