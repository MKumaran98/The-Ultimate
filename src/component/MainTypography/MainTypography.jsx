import classes from "./mainTypography.module.css";

const MainSection = () => {
  return (
    <div className={classes["main-section"]}>
      <div className={classes["main-section-typography"]}>
        <h1>Hi, I'm</h1>
        <h2 className={classes["big-heading"]}>Muthu Kumaran.</h2>
        <h3 className={classes["sub-title"]}>And I love making stuff!</h3>
        <p className={classes["typography"]}>
          I'm a developer based in India specializing in building exceptional
          webapps.
        </p>
        <a
          href="mailto: muthu101kumaran@gmail.com"
          className={classes["email-link"]}
          target="_blank"
          rel="noreferrer"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default MainSection;
