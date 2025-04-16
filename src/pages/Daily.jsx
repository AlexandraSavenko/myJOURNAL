import { useSelector } from "react-redux";
import DailyForm from "../components/HabitForm";
import {dailyHabitsArr} from '../redux/dailyHabitsSlice'
import HabitElement from "../components/HabitElement";
import { useDispatch } from "react-redux"
import { addNewHabit, addCount, lowCount, saveDailyProgress} from "../redux/dailyHabitsSlice"
import {nanoid} from '@reduxjs/toolkit';
import TrackerCo from "../components/TrackerCo";
import { useEffect } from "react";
// import { addNewHabit } from "../redux/dailyHabitsSlice";

export function Daily (){
    const myHabits = useSelector(dailyHabitsArr)
    const dispatch = useDispatch()
const totalForDay = myHabits.reduce((acc, el)=>el.repeat === 'Once' ? acc += 1 : acc += Number(el.repeatTimes), 0);
const totalDone = myHabits.reduce((acc, el) => acc += el.count, 0)

const handleNewHabit = (formValue) => {
    dispatch(addNewHabit({id: nanoid(), ...formValue, count: 0}))
}
const handleIncrement = (id) => {
    dispatch(addCount(id))
    }
const handleDecrement = (id) => {
    dispatch(lowCount(id))
    }

useEffect(() => {
    const today = new Date().getDate()
    const progress = Math.round((totalDone / totalForDay) * 100);
    dispatch(saveDailyProgress({ day: today, progress }));
    }, [totalDone, totalForDay, dispatch]);

    return <div>
        <DailyForm onSubmit={handleNewHabit}/>
    <h1>Daily</h1>
    <div className="total">
    {[...Array(totalDone)].map((_, i) => (
    <span key={i}>✅</span>
    ))}
    </div>
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
    <TrackerCo/>
    </div>
}

