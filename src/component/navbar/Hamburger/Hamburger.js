import classes from './Hamburger.module.css';
import React,{ useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';

const hamburger=React.memo((props)=>{
    const [iconClicked,seticonClicked]=useState(false);
    
    let lineOne=classes.hamburgerLine;
    let lineTwo=classes.hamburgerLine;
    let lineThree=classes.hamburgerLine;

    let hamburgerClicked=(event)=>{
        let currentStatus=iconClicked;
        seticonClicked(!currentStatus);
    }

    if(iconClicked){
        lineOne=`${classes.hamburgerLine} ${classes.lineTop}`
        lineTwo=`${classes.hamburgerLine} ${classes.lineMiddle}`
        lineThree=`${classes.hamburgerLine} ${classes.lineBottom}`
    }

    return(
        <div className={classes.hamburgerContainer} onClick={event=>hamburgerClicked(event)}>
            <div className={lineOne}></div>
            <div className={lineTwo}></div>
            <div className={lineThree}></div>
            <Dropdown open={iconClicked}/>
        </div>
        
    )
})

export default hamburger;