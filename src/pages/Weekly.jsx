import { useSelector } from 'react-redux'
import HabitForm from '../components/HabitForm'
import { weeklyHabitsArr } from '../redux/weeklyHabitsSlice'
import HabitElement from '../components/HabitElement'
import { useDispatch } from "react-redux"
import { addCount, lowCount } from "../redux/weeklyHabitsSlice"

export function Weekly () {  
    const dispatch = useDispatch()
    const handleIncrement = (id) => {
        console.log(id)
        dispatch(addCount(id))
    }
    const handleDecrement = (id) => {
        dispatch(lowCount(id))
    }
    const myHabits = useSelector(weeklyHabitsArr)
    console.log(myHabits)
    return <section id="weekly"> 
    <HabitForm/>    
    <h1>weekly habits</h1>
    <ul>
        {
            myHabits.length > 0 ? myHabits.map(el => {
                return <li key={el.id}>
                <HabitElement newHabit={el} onPlus={handleIncrement} onMinus={handleDecrement}/>
            </li> }) : <li>
                <p>Add you first weekly habit</p>
            </li>
        }
    </ul>
    {/* <button type='button'>Function underfuned</button> */}
    </section>

}