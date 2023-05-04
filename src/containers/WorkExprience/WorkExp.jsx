import SectionHeading from "../../component/SectionHeading/SectionHeading";
import Timeline from "../../component/Timeline/Timeline";
import { experienceData } from "./workExpData";

const Project = () => {
  return (
    <>
      <SectionHeading>My experience</SectionHeading>
      <Timeline data={experienceData} />
    </>
  );
};

export default Project;
