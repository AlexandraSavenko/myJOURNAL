import { Link } from "react-router-dom";
import CookBook from "../components/CookBook";
import '../scss/Cooking.scss'

export function Cooking () {
    return <div className="cooking">
        <Link to='/'>Go Back</Link>
        <div className="sidebar">
        <CookBook/>
        </div>
    </div> 
}