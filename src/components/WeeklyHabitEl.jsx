import { useDispatch } from "react-redux"
import { addCount, lowCount } from "../redux/weeklyHabitsSlice"

export default function WeeklyHabitEl ({newHabit}) {
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(addCount(newHabit.id))
    }

    const handleDecrement = () => {
        dispatch(lowCount(newHabit.id))
    }
    return <div className="weeklyEl">
        <p>{newHabit.habit}</p>
        <p>{newHabit.repeatTimes}</p>
        <div>
          <button onClick={handleIncrement}>+</button>
          <span>{newHabit.count}</span>
          <button onClick={handleDecrement}>-</button>
        </div>
    </div>
}

// {id: 'Oetab9f9M6X1D41geaS18', habit: 'to do this', repeatTimes: '7', count: 0}