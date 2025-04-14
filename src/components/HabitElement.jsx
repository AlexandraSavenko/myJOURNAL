import { useDispatch } from "react-redux"
import { addCount, lowCount } from "../redux/weeklyHabitsSlice"
import css from '../scss/WeeklyHabitEl.module.scss'

export default function HabitElement ({newHabit}) {
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(addCount(newHabit.id))
    }

    const handleDecrement = () => {
        dispatch(lowCount(newHabit.id))
    }
    console.log(newHabit)
    return <div className={css.weeklyEl}>
        <p>{newHabit.habit}</p>
        {newHabit.repeat === "Many" ? <div className={css.count}>
        <button onClick={handleIncrement}>+</button>
        <span>{newHabit.count}</span>
        <button onClick={handleDecrement}>-</button> 
        <p>{newHabit.repeatTimes}</p>       
        </div> : <p>{newHabit.repeat}</p> }
                 
        
    </div>
}

// {id: 'Oetab9f9M6X1D41geaS18', habit: 'to do this', repeatTimes: '7', count: 0}