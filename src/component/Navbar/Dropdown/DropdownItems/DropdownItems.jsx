import classes from "./dropdownItems.module.css";
import DropdownItem from "./DropdownItem/DropdownItem";

const items = ["home", "about", "experience", "blogs"];
const DropdownItems = () => {
  return (
    <ul className={classes["dropdown-list"]}>
      {items.map((item) => (
        <DropdownItem key={item}>{item}</DropdownItem>
      ))}
    </ul>
  );
};

export default DropdownItems;
