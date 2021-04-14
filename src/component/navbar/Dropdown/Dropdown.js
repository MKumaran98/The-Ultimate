import './Dropdown.css';
import {CSSTransition} from 'react-transition-group'
import DropdownItems from './DropdownItems/DropdownItems'

const Dropdown=({open})=>{
    
    return(
        <CSSTransition 
            in={open} 
            timeout={500}
            mountOnEnter 
            unmountOnExit
            classNames="open-close"
            >
            <div className="dropdown-menu">
                <DropdownItems open={open}/>
            </div>
        </CSSTransition>
    )
}

export default Dropdown