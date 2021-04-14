import SectionHeading from '../../component/sectionHeading/sectionHeading';
import ProjectContainer from '../../component/projectContainer/projectContainer';
import {ProjectData} from './ProjectsData'

const Project=()=>{
    return(
        <div>
            <SectionHeading>My Projects</SectionHeading>
            <ul style={{marginBottom:"0"}}>
                {
                    ProjectData.map(({name,description,techologiesUsed,image,github,live},index)=>(
                        <li key={index}>
                            <ProjectContainer
                                name={name}
                                description={description}
                                techologiesUsed={techologiesUsed}
                                image={image}
                                github={github}
                                live={live}
                                evenPosition={index%2===0}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Project;