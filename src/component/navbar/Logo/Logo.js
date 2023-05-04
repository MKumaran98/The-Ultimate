import image from '../../../assets/Logo/mk logo finD.png'
import classes from './logo.module.css'
import {Link} from 'react-router-dom'

const logo=()=>{
    return(
        <Link to="/">
            <img src={image} alt="MK" className={classes.logo}/>
        </Link>
    )
}

export default logo;