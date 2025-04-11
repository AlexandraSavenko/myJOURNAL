import { useSelector } from 'react-redux'
import WeeklyForm from '../components/WeeklyForm'
import { weeklyHabitsArr } from '../redux/weeklyHabitsSlice'
import WeeklyHabitEl from '../components/WeeklyHabitEl'

export function Weekly () {
    const myHabits = useSelector(weeklyHabitsArr)
    return <section id="weekly"> 
    <WeeklyForm/>    
    <h1>weekly habits</h1>
    <ul>
        {
            myHabits.length > 0 ? myHabits.map(el => {console.log(el)
                return <li key={el.id}>
                <WeeklyHabitEl newHabit={el}/>
            </li> }) : <li>
                <p>Add you first weekly habit</p>
            </li>
        }
    </ul>
    </section>

}