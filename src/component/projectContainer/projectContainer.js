import React from 'react';
import classes from './projectContainer.module.css';

const ProjectContainer=(props)=>{
    return(
        <div className={classes.ProjectContainer}>
            {props.evenPosition?
                <React.Fragment>
                    <div className={classes.description}>
                    <h2 className={`${classes.heading} ${classes.evenHeading}`}>Project 1</h2>
                    <div className={classes.textDescription}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries,but also the leap into electronic typesetting, 
                            remaining essentially unchanged</p>
                    </div>
                    <div className={`${classes.linksContainer} ${classes.evenLinks}`}>
                        <span className={classes.links}>Go to Github!</span>
                        <span className={classes.links}>Live Site</span>
                    </div>
                    </div>
                    <div className={classes.screenShot}>
                    </div>
                </React.Fragment>
                :
                <React.Fragment>
                    <div className={classes.screenShot}>
                    </div>
                    <div className={classes.description}>
                        <h2 className={classes.heading}>Project 1</h2>
                        <div className={classes.textDescription} >
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries,but also the leap into electronic typesetting, 
                                remaining essentially unchanged</p>
                        </div>
                        <div className={classes.linksContainer}>
                            <span className={classes.links}>Go to Github!</span>
                            <span className={classes.links}>Live Site</span>
                        </div>
                    </div>
                </React.Fragment>           
                }
            <div className={classes.mobileDescription}>
                <h2 className={classes.heading}>Project 1</h2>
                <div className={classes.textDescription}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries,but also the leap into electronic typesetting, 
                        remaining essentially unchanged</p>
                </div>
                <div className={classes.linksContainer}>
                    <span className={classes.links}>Go to Github!</span>
                    <span className={classes.links}>Live Site</span>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectContainer;