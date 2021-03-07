import React from 'react';
import classes from './Home.module.css';
import SocialIcons from '../../component/SocialLinks/socialicons';
import MainTypography from '../../component/maintypography/maintypography';
import Wifi from '../../component/wifi/wifi';

const Home=(props)=>{
    return(
        <div className={classes.homeContainer}>
            <MainTypography/>
            <SocialIcons/>
            <Wifi/>
        </div>
    )
}

export default Home;