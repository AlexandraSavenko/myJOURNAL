import { NavLink } from "react-router-dom";
import '../scss/Navigation.scss'
export default function Navigation () {
    return <ul className="nav-list">
        <li className="nav-item">
            <NavLink to='/mood'>Mood</NavLink>
            </li>
        <li className="nav-item">
            <NavLink to='/habits'>Habits</NavLink>
            </li>
        <li className="nav-item">
            <NavLink to='/cooking'>Cooking</NavLink>
            </li>
        
    </ul>
}