import React from 'react';
import classes from './ProfileImage.module.css';
import image from '../../../Assets/IMG_5214.jpg'

const ProfileImage=(props)=>{
    return(
        <div>
            <div className={classes.outLine}>
                <img src={image} alt="Profile" className={classes.image}/>
            </div>
        </div>
    )
}

export default ProfileImage;