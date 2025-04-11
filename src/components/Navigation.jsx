import { NavLink } from "react-router-dom";
import css from  '../scss/Navigation.module.scss'
export default function Navigation () {
    return <ul className={css.navList}>
        <li className={css.navItem}>
            <NavLink to='/mood'>mood tracker</NavLink>
            </li>
        <li className={css.navItem}>
            <NavLink to='/weekly'>weekly habits</NavLink>
            </li>
        
    </ul>
}