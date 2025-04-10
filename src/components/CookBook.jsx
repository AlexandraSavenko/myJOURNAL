import { useState } from 'react'
import '../scss/Cookbook.scss'
import AddDishForm from './AddDishForm'
import clsx from 'clsx'
export default function CookBook () {
    const [open, setOpen] = useState(false)

    const handleFormOpen = () => {
        setOpen(true)
    }

    const formClass = clsx('adding-form', open &&'adding-form-open')
    return <div className="cook-book">
        <button className="add-dish-btn" onClick={handleFormOpen}>Add</button>
<p>dish</p>
<p>dish</p>

<p>dish</p>
<div className={formClass}>
<AddDishForm/>
</div>
    </div>
}