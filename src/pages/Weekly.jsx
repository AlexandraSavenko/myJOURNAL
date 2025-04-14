import { useSelector } from 'react-redux'
import WeeklyForm from '../components/WeeklyForm'
import { weeklyHabitsArr } from '../redux/weeklyHabitsSlice'
import HabitElement from '../components/HabitElement'

export function Weekly () {
    const myHabits = useSelector(weeklyHabitsArr)
    return <section id="weekly"> 
    <WeeklyForm/>    
    <h1>weekly habits</h1>
    <ul>
        {
            myHabits.length > 0 ? myHabits.map(el => {
                return <li key={el.id}>
                <HabitElement newHabit={el}/>
            </li> }) : <li>
                <p>Add you first weekly habit</p>
            </li>
        }
    </ul>
    </section>

}