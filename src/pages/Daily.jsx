import { useSelector } from "react-redux";
import DailyForm from "../components/DailyForm";
import {dailyHabitsArr} from '../redux/dailyHabitsSlice'
import HabitElement from "../components/HabitElement";

export function Daily (){
    const myHabits = useSelector(dailyHabitsArr)
    return <div>
        <DailyForm/>
    <h1>Daily</h1>
<ul>
        {
            myHabits.length > 0 ? myHabits.map(el => {
                return <li key={el.id}>
                <HabitElement newHabit={el}/>
            </li> }) : <li>
                <p>Add you first habit</p>
            </li>
        }
    </ul>
    </div>
}