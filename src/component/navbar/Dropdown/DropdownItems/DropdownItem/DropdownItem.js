import React from 'react';
import classes from "./DropdownItem.module.css";
import {Link} from 'react-router-dom'

const DropdownItem=(props)=>{
    return(
        <li className={classes.menuItem}>
            <Link to={props.children==="home"?"/":`/${props.children}`}>
                {props.children}
            </Link>
        </li>
    )
}

export default DropdownItem