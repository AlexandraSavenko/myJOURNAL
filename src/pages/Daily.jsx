import { useSelector } from "react-redux";
import DailyForm from "../components/HabitForm";
import {dailyHabitsArr} from '../redux/dailyHabitsSlice'
import HabitElement from "../components/HabitElement";
import { useDispatch } from "react-redux"
import { addNewHabit, addCount, lowCount, saveDailyProgress} from "../redux/dailyHabitsSlice"
import {nanoid} from '@reduxjs/toolkit';
import TrackerCo from "../components/TrackerCo";
import { useEffect } from "react";
import { dailyHabitProgress } from "../redux/dailyHabitsSlice";
import AchievementsCo from "../components/AchievementsCo";
// import { addNewHabit } from "../redux/dailyHabitsSlice";
import css from '../scss/Daily.module.scss'

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

    const myProgress = useSelector(dailyHabitProgress);

    function getColorClass(percent) {
        if (percent === 0) return "progress-0";
        if (percent <= 20) return "progress-20";
        if (percent <= 40) return "progress-40";
        if (percent <= 60) return "progress-60";
        if (percent <= 80) return "progress-80";
        return "progress-100";
      }

    return <div className="container">
        <DailyForm onSubmit={handleNewHabit}/>
    <div className={css.total}>    
        <h1>Daily</h1>

        <AchievementsCo totalDone={totalDone} goal={totalForDay}/>
    {/* {[...Array(totalDone)].map((_, i) => (
    <span key={i}>✅</span>
    ))} */}
    </div>
    <ul>
    {
        myHabits.length > 0 ? myHabits.map(el => {
        return <li key={el.id}>
        <HabitElement newHabit={el} onPlus={handleIncrement} onMinus={handleDecrement}/>
        </li> }) : <li>
        <p className={css.text}>Add you first habit</p>
        </li>
    }
    </ul>
    <TrackerCo getColorClass={getColorClass}
  progressData={myProgress} />
    </div>
}

