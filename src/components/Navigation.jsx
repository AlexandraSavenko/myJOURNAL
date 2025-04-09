import { NavLink } from "react-router-dom";

export default function Navigation () {
    return <ul>
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