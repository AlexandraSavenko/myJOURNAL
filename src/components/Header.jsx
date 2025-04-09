import Navigation from "./Navigation";
import DateDisplay from "./DateDisplay";
import HamburgerCo from "./HamburgerCo";
import clsx from "clsx";
import '../scss/Header.scss'



export default function Header () {
    
    return <header className="j-header">
        <DateDisplay/>
        <div className="burger">
        <HamburgerCo/>
        </div>
        <nav className={clsx('header-nav', open && 'header-nav-open')}>
        <Navigation />
        </nav>
    </header>
}