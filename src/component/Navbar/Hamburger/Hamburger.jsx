import classes from "./hamburger.module.css";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

const Hamburger = () => {
  const [iconClicked, seticonClicked] = useState(false);

  let lineOne = classes["hamburger-line"];
  let lineTwo = classes["hamburger-line"];
  let lineThree = classes["hamburger-line"];

  let hamburgerClicked = () => {
    let currentStatus = iconClicked;
    seticonClicked(!currentStatus);
  };

  if (iconClicked) {
    lineOne = `${classes["hamburger-line"]} ${classes["line-top"]}`;
    lineTwo = `${classes["hamburger-line"]} ${classes["line-middle"]}`;
    lineThree = `${classes["hamburger-line"]} ${classes["line-bottom"]}`;
  }

  return (
    <div className={classes["hamburger-container"]} onClick={hamburgerClicked}>
      <div className={lineOne}></div>
      <div className={lineTwo}></div>
      <div className={lineThree}></div>
      <Dropdown open={iconClicked} />
    </div>
  );
};

export default Hamburger;
