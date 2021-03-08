import SectionHeading from '../../component/sectionHeading/sectionHeading';
import ProjectContainer from '../../component/projectContainer/projectContainer';

const Project=(props)=>{
    return(
        <div>
            <SectionHeading>My Projects</SectionHeading>
            <ProjectContainer evenPosition={false}/>
            <ProjectContainer evenPosition={true}/>
            <ProjectContainer evenPosition={false}/>
            <ProjectContainer evenPosition={true}/>
        </div>
    )
}

export default Project;