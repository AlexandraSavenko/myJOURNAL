import Hamburger from "hamburger-react"
import { useState } from "react"

export default function HamburgerCo (){
    const [open, setOpen] = useState(false)
    return <Hamburger size={18} toggled={open} toggle={setOpen}/>
}