import { NavLink } from "react-router-dom";
import css from  '../scss/Navigation.module.scss'
export default function Navigation ({closeMenu}) {
    return <ul className={css.navList}>
        <li className={css.navItem}>
            <NavLink onClick={closeMenu} to='/mood'>mood tracker</NavLink>
            </li>
        <li className={css.navItem}>
            <NavLink onClick={closeMenu} to='/weekly'>weekly habits</NavLink>
            </li>
        
    </ul>
}