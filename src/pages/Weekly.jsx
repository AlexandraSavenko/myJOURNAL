import { useSelector } from 'react-redux'
import HabitForm from '../components/HabitForm'
import { weeklyHabitProgress, weeklyHabitsArr } from '../redux/weeklyHabitsSlice'
import HabitElement from '../components/HabitElement'
import { useDispatch } from "react-redux"
import { addNewHabit, addCount, lowCount, deleteHabit, saveWeeklyProgress } from "../redux/weeklyHabitsSlice"
import {nanoid} from '@reduxjs/toolkit';
import { useEffect } from 'react'
import css from '../scss/Weekly.module.scss'
import AchievementsCo from '../components/AchievementsCo'

export function Weekly () {  
    const dispatch = useDispatch() 
    const myHabits = useSelector(weeklyHabitsArr)
    const myProgress = useSelector(weeklyHabitProgress)
    console.log(myProgress)
    const totalForWeek = myHabits.reduce((acc, el) => el.repeat === 'Once' ? acc += 1 : acc += Number(el.repeatTimes), 0)
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
   const handleDelete = (id) => {
    dispatch(deleteHabit(id))
   }

   useEffect(() => {
    if (totalDone === undefined || totalForWeek === undefined || totalForWeek === 0) return;
    const day = new Date().getDay();
    const thisWeek = myProgress.length > 0 ? myProgress[myProgress.length - 1].weekId : 1; 
    const weekId = day !== 1 ? thisWeek : thisWeek + 1;
    console.log('this week' ,thisWeek)
       dispatch(saveWeeklyProgress({ weekId: weekId, totalDone, totalForWeek }));
       }, [totalDone, totalForWeek, dispatch]);

    return <div id="container"> 
    <HabitForm onSubmit={handleNewHabit}/>    
    <h1>weekly habits</h1>
    <div className={css.total}>
    {[...Array(totalDone)].map((_, i) => (
    <span className={css.circle} key={i}>&#128176;</span>
  ))}
    </div>
    <ul>
        {
            myHabits.length > 0 ? myHabits.map(el => {
                return <li key={el.id}>
                <HabitElement newHabit={el} onPlus={handleIncrement} onMinus={handleDecrement} onDelete={handleDelete}/>
            </li> }) : <li>
                <p>Add you first weekly habit</p>
            </li>
        }
    </ul>
    <div>
        <div>
            <ul className={css.jars}>
            {
                myProgress.map((week, index) => <li className={css.jar}  key={index}>
                    <span>week {week.weekId}</span>
                    <AchievementsCo totalDone={week.totalDone} goal={week.totalForWeek} />
                </li> )
            }</ul>
        </div>
    </div>
    </div>

}