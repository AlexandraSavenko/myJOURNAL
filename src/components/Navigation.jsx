import { NavLink } from "react-router-dom";

export default function Navigation () {
    return <nav>
        <NavLink to='/mood'>Mood</NavLink>
        <NavLink to='/habits'>Habits</NavLink>
        <NavLink to='/cooking'>Cooking</NavLink>
    </nav>
}