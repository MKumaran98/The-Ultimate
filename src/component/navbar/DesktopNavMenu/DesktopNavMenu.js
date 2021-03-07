import classes from './DesktopNavMenu.module.css'
import {NavLink} from 'react-router-dom'

const desktopNavMenu=(props)=>{
    return(
        <ul className={classes.navigationItemsDesktop}>
                <li className={classes.navButton} >
                    <NavLink
                        to="/" exact
                        activeClassName={classes.activeDesktop}
                    >
                        Home
                    </NavLink>
                </li>
                <li className={classes.navButton}>
                    <NavLink
                        to="/about"
                        activeClassName={classes.activeDesktop}
                    >
                        About
                    </NavLink>
                </li>
                <li className={classes.navButton}>
                    <NavLink
                        to="/projects"
                        activeClassName={classes.activeDesktop}
                    >
                        Projects
                    </NavLink>
                </li>
                <li className={classes.navButton}>
                    <NavLink
                        to="/blogs"
                        activeClassName={classes.activeDesktop}
                    >
                        Blogs
                    </NavLink>
                </li>
                <li className={classes.navButton}>
                    <NavLink
                        to="/contacts"
                        activeClassName={classes.activeDesktop}
                    >
                        Contacts
                    </NavLink>
                </li>
            </ul>
    )
}

export default desktopNavMenu