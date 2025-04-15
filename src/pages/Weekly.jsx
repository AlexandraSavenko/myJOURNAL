import { useSelector } from 'react-redux'
import HabitForm from '../components/HabitForm'
import { weeklyHabitsArr } from '../redux/weeklyHabitsSlice'
import HabitElement from '../components/HabitElement'
import { useDispatch } from "react-redux"
import { addNewHabit, addCount, lowCount } from "../redux/weeklyHabitsSlice"
import {nanoid} from '@reduxjs/toolkit';

export function Weekly () {  
    const dispatch = useDispatch() 
    const myHabits = useSelector(weeklyHabitsArr)
    const totalDone = myHabits.reduce((acc, el) => acc += el.count, 0)
    const handleNewHabit = (formValue) => {
        dispatch(addNewHabit({id: nanoid(), ...formValue, count: 0}))
      }
    const handleIncrement = (id) => {
        console.log('works')
        dispatch(addCount(id))
    }
    const handleDecrement = (id) => {
        dispatch(lowCount(id))
    }
   

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
                <HabitElement newHabit={el} onPlus={handleIncrement} onMinus={handleDecrement}/>
            </li> }) : <li>
                <p>Add you first weekly habit</p>
            </li>
        }
    </ul>
    {/* <button type='button'>Function underfuned</button> */}
    </section>

}