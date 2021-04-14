import React from 'react';
import classes from './sectionHeading.module.css';

const SectionHeading=({children})=>{
    return(
        <div className={classes["section-heading"]}>
            <h2 className={classes["section-heading-text"]}>{children}</h2>
            <div className={classes["heading-line"]}></div>
        </div>
    )
}

export default SectionHeading;