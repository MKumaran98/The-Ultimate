import DropdownItem from './DropdownItem/DropdownItem'
import classes from './DropdownItems.module.css'

const DropdownItems=()=>{
    const items=[
        "home",
        "about",
        "projects",
        "blogs"
    ]
    
    return(
        <ul className={classes["dropdown-list"]}>
            {
                items.map(item=>(<DropdownItem
                    key={item}
                >
                    {item}
                </DropdownItem>))
            }
        </ul>
    )
}

export default DropdownItems;