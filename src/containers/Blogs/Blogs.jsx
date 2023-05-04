import classes from "./blog.module.css";
import BlogContainer from "../../component/BlogContainer/BlogContainer";
import SectionHeading from "../../component/SectionHeading/SectionHeading";
import { BlogData } from "./blogsData";

const blogContainer = () => {
  return (
    <div className={classes["blog-container"]}>
      <SectionHeading>My Blogs</SectionHeading>
      <ul className={classes["cards"]}>
        {BlogData.map(({ image, name, description, link }, index) => (
          <li key={index}>
            <BlogContainer
              image={image}
              name={name}
              description={description}
              link={link}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default blogContainer;
