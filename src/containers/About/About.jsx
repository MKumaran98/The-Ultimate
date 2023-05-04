import SectionHeading from "../../component/SectionHeading/SectionHeading";
import classes from "./about.module.css";
import ProfileImage from "./ProfileImage/ProfileImage";

const about = () => {
  return (
    <div>
      <SectionHeading>About Me</SectionHeading>
      <div className={classes["about-container"]}>
        <div className={classes["description"]}>
          <p>
            Hey, I'm Kumaran, A Fullstack developer with a love for
            problem-solving.
          </p>
          <p>
            I enjoy learning new things and perfecting my craft. I love working
            in javascript and I like to get my hands dirty with design from time
            to time.
          </p>
          <p>
            Outside of work I'm an avid rider and I'm always on the look out for
            the next fun adventure
          </p>
          <p>
            I graduated from SASTRA University with a major in Computer Science
            and Engineering. Currently, I am working as a Frontend Engineer at
            Unacademy, primarily focusing on the in-house CRM system.
          </p>
        </div>
        <ProfileImage />
      </div>
      <div className={classes["skills"]}>
        <p>Some of my key competencies are:</p>
        <div className={classes["competency-list-container"]}>
          <ul className={classes["competency-list"]}>
            <li>Javascript(ES6)</li>
            <li>HTML and CSS</li>
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>Zustand</li>
          </ul>
          <ul className={classes["competency-list"]}>
            <li>Redux</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>Typescript</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default about;
