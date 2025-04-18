import { useSelector } from 'react-redux'
import HabitForm from '../components/HabitForm'
import { weeklyHabitProgress, weeklyHabitsArr } from '../redux/weeklyHabitsSlice'
import HabitElement from '../components/HabitElement'
import { useDispatch } from "react-redux"
import { addNewHabit, addCount, lowCount, deleteHabit, saveWeeklyProgress } from "../redux/weeklyHabitsSlice"
import {nanoid} from '@reduxjs/toolkit';
import { useEffect } from 'react'
import css from '../scss/Weekly.module.scss'

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
    const weeksArr = Object.keys(myProgress);

   useEffect(() => {
    const day = new Date().getDay();
    const thisWeek = weeksArr.length > 0 ? weeksArr[weeksArr.length - 1] : 1;
    const weekId = day !== 1 ? thisWeek : thisWeek + 1;
       const progress = Math.round((totalDone / totalForWeek) * 100);
       dispatch(saveWeeklyProgress({ weekId: weekId, progress }));
       }, [totalDone, totalForWeek, dispatch]);

    return <section id="weekly"> 
    <HabitForm onSubmit={handleNewHabit}/>    
    <h1>weekly habits</h1>
    <div className="total">
    {[...Array(totalDone)].map((_, i) => (
    <span key={i}>✅</span>
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
            {
                weeksArr.map((week, index) => <div className={css.jar} key={index}>{week}</div> )
            }
        </div>
    </div>
    </section>

}