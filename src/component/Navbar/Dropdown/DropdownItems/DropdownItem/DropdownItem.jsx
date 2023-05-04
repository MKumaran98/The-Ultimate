import classes from "./DropdownItem.module.css";
import { Link } from "react-router-dom";

const DropdownItem = ({ children }) => {
  return (
    <li className={classes["menu-item"]}>
      <Link to={children === "home" ? "/" : `/${children}`}>{children}</Link>
    </li>
  );
};

export default DropdownItem;
