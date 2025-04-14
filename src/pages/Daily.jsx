import { useSelector } from "react-redux";
import DailyForm from "../components/HabitForm";
import {dailyHabitsArr} from '../redux/dailyHabitsSlice'
import HabitElement from "../components/HabitElement";
import { useDispatch } from "react-redux"
import { addNewHabit, addCount, lowCount } from "../redux/dailyHabitsSlice"
import {nanoid} from '@reduxjs/toolkit';
// import { addNewHabit } from "../redux/dailyHabitsSlice";

export function Daily (){
    const myHabits = useSelector(dailyHabitsArr)
    const dispatch = useDispatch()

const handleNewHabit = (formValue) => {
  dispatch(addNewHabit({id: nanoid(), ...formValue, count: 0}))
}
    const handleIncrement = (id) => {
        dispatch(addCount(id))
    }
    const handleDecrement = (id) => {
        dispatch(lowCount(id))
    }
    return <div>
        <DailyForm onSubmit={handleNewHabit}/>
    <h1>Daily</h1>
<ul>
        {
            myHabits.length > 0 ? myHabits.map(el => {
                return <li key={el.id}>
                <HabitElement newHabit={el} onPlus={handleIncrement} onMinus={handleDecrement}/>
            </li> }) : <li>
                <p>Add you first habit</p>
            </li>
        }
    </ul>
    </div>
}