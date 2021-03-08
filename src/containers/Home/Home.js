import React from 'react';
import classes from './Home.module.css';
import MainTypography from '../../component/maintypography/maintypography';
import Wifi from '../../component/wifi/wifi';

const Home=(props)=>{
    return(
        <div className={classes.homeContainer}>
            <MainTypography/>
            <Wifi/>
        </div>
    )
}

export default Home;