import React from 'react';
import classes from './sectionHeading.module.css';

const SectionHeading=(props)=>{
    return(
        <div className={classes.sectionHeading}>
            <h2 className={classes.sectioHeadingText}>{props.children}</h2>
            <div className={classes.headingLine}></div>
        </div>
    )
}

export default SectionHeading;