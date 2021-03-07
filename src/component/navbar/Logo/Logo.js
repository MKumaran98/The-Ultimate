import image from '../../../Assets/Logo/mk logo finD.png'
import classes from './Logo.module.css'
import {Link} from 'react-router-dom'

const logo=(props)=>{
    return(
        <Link to="/">
            <img src={image} alt="MK" className={classes.logo}/>
        </Link>
    )
}

export default logo;