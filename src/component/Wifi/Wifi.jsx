import classes from "./wifi.module.css";

const Wifi = () => {
  return (
    <div className={classes["router"]}>
      <div className={classes["signal"]}></div>
      <div className={classes["signal"]}></div>
      <div className={classes["signal"]}></div>
      <div className={classes["signal"]}></div>
    </div>
  );
};

export default Wifi;
