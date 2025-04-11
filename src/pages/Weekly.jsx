import { useSelector } from 'react-redux'
import WeeklyForm from '../components/WeeklyForm'
import { weeklyHabitsArr } from '../redux/weeklyHabitsSlice'

export function Weekly () {
    const myHabits = useSelector(weeklyHabitsArr)
    console.log(myHabits)
    return <section id="weekly"> 
    <WeeklyForm/>    
    <h1>weekly habits</h1>

    </section>

}