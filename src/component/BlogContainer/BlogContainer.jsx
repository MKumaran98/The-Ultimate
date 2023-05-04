import classes from "./blogContainer.module.css";

const blogContainer = ({ image, name, description, link }) => {
  return (
    <div className={classes["card"]}>
      <img className={classes["card-image"]} src={image} alt="blog-img" />
      <div className={classes["card-content"]}>
        <div className={classes["card-title"]}>
          <h4>{name}</h4>
        </div>
        <p>{description}</p>
        <div className={classes["blog-icon-container"]}>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={classes["read-more-text"]}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default blogContainer;
