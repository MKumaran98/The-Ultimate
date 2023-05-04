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
            I enjoy constantly learning and perfecting my craft, with a
            particular passion for Javascript. I also enjoy getting creative
            with design from time to time.
          </p>
          <p>
            As a computer science and engineering major at SASTRA University, I
            found the journey exhilarating, from late-night coding sessions to
            conquering tough algorithms. Graduating and receiving my degree was
            a proud moment.
          </p>
          <p>
            Now, I'm a frontend engineer at the fast-growing educational tech
            company, Unacademy. Working with the revenue and internal tools
            team, I use my skills to create impactful user experiences. It's a
            thrilling experience to be part of a company that's revolutionizing
            education, and I'm excited to see what the future holds.
          </p>
          <p>
            One of my greatest passions outside of work is hitting the open road
            on my motorcycle and seeking out thrilling new adventures. Whether
            I'm cruising down scenic routes or tackling challenging off-road
            terrain, the rush of adrenaline that comes with pushing myself to
            new limits is what keeps me coming back for more. Life is too short
            to be bored, which is why I'm always on the lookout for my next big
            adventure.
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
