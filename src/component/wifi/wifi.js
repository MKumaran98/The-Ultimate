import classes from './wifi.module.css';

const wifi=()=>{
  return (
  <div className={classes["router"]}>
    <div className={classes["signal"]}></div>
    <div className={classes["signal"]}></div>
    <div className={classes["signal"]}></div>
    <div className={classes["signal"]}></div>
  </div>
  );
}

export default wifi;
