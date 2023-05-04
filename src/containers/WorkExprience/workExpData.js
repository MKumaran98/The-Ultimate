import sastraLogo from "../../assets/sastraLogo.webp";
import tcsLogo from "../../assets/TCSLogo.png";
import unacademyLogo from "../../assets/unacademyLogo.webp";

const imageStyle = {
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  background: "white",
};

export const experienceData = [
  {
    heading: "SASTRA University",
    subheading: "Did my Bachelor's degree in Computer Science and Engineering",
    icon: <img src={sastraLogo} alt="SASTRA" style={imageStyle} />,
    timeline: "2016-2020",
    points: [
      "Learnt the basics of programming and DSA",
      "Started my fullstack journey by learning MERN stack and developed a lot of mini projects.",
      "Participated in various Hackathons.",
      "Placed in the top 1000 in Hackwithinfy(among more than 3 lakh total participants).",
      "Active participant in the college photography club.",
      "Active participant in the NSS chapter of our college",
    ],
  },
  {
    heading: "TCS",
    subheading: "Frontend engineer working as a contractor for PWC",
    icon: <img src={tcsLogo} alt="TCS" style={imageStyle} />,
    timeline: "Nov 2020 - Oct 2021",
    points: [
      "Built UI using Angular9 and Typescript for an application used by the audit teams for one of the big four audit firms.",
      "Worked in agile and participated in sprint ceremonies as a development team member.",
      "Collaborated with dev team members to come up a various design outputs which would reduce the effort on the part of the audit teams and make filling audit findings easier.",
      "This application is currently being used in the North American geography",
      "Technologies used: Angular9, Typescript",
    ],
  },
  {
    heading: "Unacademy",
    subheading: "Software engineer working primarily on the in-house CRM",
    icon: <img src={unacademyLogo} alt="Unacademy" style={imageStyle} />,
    timeline: "Oct 2021 - Present",
    points: [
      "Currently working as a part of Unacademy’s Growth and Revenue vertical.",
      "Architected and Built the UI for the in-house CRM of Unacademy from scratch.",
      "Owned and delivered various features like Interactive table,Advanced query generator, Power-calling, Sales tracker etc that helped improve user productivity.",
      "The power-calling feature helped in reducing the time taken between calls which improved the calling rate by 25%.",
      "Implemented various performance and UX enhancements which were paramount in improving the user satisfaction score by 70% from release.",
      "Ensured code quality was maintained in the repository with a strict code review process.",
      "Technologies used: NextJS, MaterialUI, EmotionUI, Zustand, SWR",
    ],
  },
];
