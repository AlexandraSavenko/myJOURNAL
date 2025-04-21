import Navigation from "./Navigation";
import DateDisplay from "./DateDisplay";
import Hamburger from "hamburger-react"
import clsx from "clsx";
import css from '../scss/Header.module.scss'
import { useState } from "react";



export default function Header () {
        const [open, setOpen] = useState(false)

        const handleNavigation = () => {
            setOpen(false)
        }
    
    return <header>
        <div className="container">
            <div className={css.jHeader}>
        <DateDisplay/>
        <div className={css.burger}>
        <Hamburger size={20} toggled={open} toggle={setOpen}/>
        </div>
        <nav className={clsx(css.headerNav, open && css.headerNavOpen)}>
        <Navigation closeMenu={handleNavigation} />
        </nav>
        </div>
        </div>
    </header>
}