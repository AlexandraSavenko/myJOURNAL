import Navigation from "./Navigation";
import DateDisplay from "./DateDisplay";
import '../scss/Header.scss'


export default function Header () {
    
    return <header className="j-header">
        <DateDisplay/>
        <Navigation/>
    </header>
}