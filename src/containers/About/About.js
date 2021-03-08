import SectionHeading from '../../component/sectionHeading/sectionHeading'
import classes from './About.module.css'
import ProfileImage from './ProfileImage/ProfileImage'

const about=(props)=>{
    return(
        <div>
            <SectionHeading>About Me</SectionHeading>
            <div className={classes.aboutContainer}>
                <div className={classes.description}>
                    <p>
                        Hey, I'm Kumaran, A Fullstack developer with a love for problem-solving.
                    </p>
                    <p>
                        I enjoy learning new things and perfecting my craft. I love working in javascript 
                        and I like to get my hands dirty with design from time to time. 
                    </p>
                    <p>
                        I graduated from SASTRA University where I majored in Computer Science and Engineering 
                        and currently I'm working as a contractor for PwC in TCS. 
                        My role is that of a frontend developer. 
                    </p>
                </div>                
                <ProfileImage/>
            </div>
            <div className={classes.skills}>
                <p>
                    Some of my key competencies are:
                </p>
                <div className={classes.competencyListContainer}>
                    <ul className={classes.competencyList}>
                        <li>
                            Javascript(ES6)
                        </li>
                        <li>
                            HTML and CSS
                        </li>
                        <li>
                            ReactJS
                        </li>
                        <li>
                            NodeJS
                        </li>
                    </ul>
                    <ul className={classes.competencyList}>
                        <li>
                            ExpressJS
                        </li>
                        <li>
                            MongoDB
                        </li>
                        <li>
                            AngularJS
                        </li>
                        <li>
                            Typescript
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default about;