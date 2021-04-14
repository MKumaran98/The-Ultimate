import classes from './navbar.module.css'
import Logo from './Logo/Logo'
import Hamburger from './Hamburger/Hamburger'
import DesktopNavMenu from './DesktopNavMenu/DesktopNavMenu'

const navbar=()=>{
    return(
        <nav className={classes["navbar"]}>
            <Logo/>
            <DesktopNavMenu/>
            <Hamburger/>
        </nav>
    )

}

export default navbar;