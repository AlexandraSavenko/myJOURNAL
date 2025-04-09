import Navigation from "./Navigation";
import DateDisplay from "./DateDisplay";
import Hamburger from "hamburger-react"
import clsx from "clsx";
import '../scss/Header.scss'
import { useState } from "react";



export default function Header () {
        const [open, setOpen] = useState(false)
    
    return <header>
        <div className="container">
            <div className="j-header">
        <DateDisplay/>
        <div className="burger">
        <Hamburger size={20} toggled={open} toggle={setOpen}/>
        </div>
        <nav className={clsx('header-nav', open && 'header-nav-open')}>
        <Navigation />
        </nav>
        </div>
        </div>
    </header>
}