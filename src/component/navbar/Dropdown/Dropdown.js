import React from 'react';
import './Dropdown.css';
import {CSSTransition} from 'react-transition-group'
import DropdownItems from './DropdownItems/DropdownItems'

const Dropdown=(props)=>{
    
    return(
        <CSSTransition 
            in={props.open} 
            timeout={500}
            mountOnEnter 
            unmountOnExit
            classNames="open-close"
            >
            <div className="dropdownMenu">
                <DropdownItems open={props.open}/>
            </div>
        </CSSTransition>
    )
}

export default Dropdown