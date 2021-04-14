import React from 'react';
import classes from './projectContainer.module.css';

const ProjectContainer=(props)=>{
    return(
        <div className={classes.ProjectContainer}>
            {props.evenPosition?
                <React.Fragment>
                    <div className={classes.description}>
                    <h2 className={`${classes.heading} ${classes.evenHeading}`}>{props.name}</h2>
                    <div className={classes.textDescription}>
                        <p>{props.description}</p>
                    </div>
                    <div className={`${classes.linksContainer} ${classes.evenLinks}`}>
                        <a href={props.github} target="_blank" rel="noreferrer" className={classes.links}>Go to Github</a>
                        <a href={props.live} target="_blank" rel="noreferrer" className={classes.links}>Live Site</a>
                    </div>
                    </div>
                    <img 
                        src={props.image}
                        alt="project"
                        className={classes.screenShot}/>
                </React.Fragment>
                :
                <React.Fragment>
                    <img 
                        src={props.image}
                        alt="project"
                        className={classes.screenShot}/>
                    <div className={classes.description}>
                        <h2 className={classes.heading}>{props.name}</h2>
                        <div className={classes.textDescription} >
                            <p>{props.description}</p>
                        </div>
                        <div className={classes.linksContainer}>
                        <a href={props.github} target="_blank" rel="noreferrer" className={classes.links}>Go to Github!</a>
                        <a href={props.live} target="_blank" rel="noreferrer"  className={classes.links}>Live Site</a>
                        </div>
                    </div>
                </React.Fragment>           
                }
            <div className={classes.mobileDescription}>
                <h2 className={classes.heading}>{props.name}</h2>
                <div className={classes.textDescription}>
                    <p>{props.description}</p>
                </div>
                <div className={classes.linksContainer}>
                    <a href={props.github} target="_blank" rel="noreferrer" className={classes.links}>Go to Github!</a>
                    <a href={props.live} target="_blank" rel="noreferrer" className={classes.links}>Live Site</a>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectContainer;