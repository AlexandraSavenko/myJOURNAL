import { useDispatch } from "react-redux"
import { addCount } from "../redux/weeklyHabitsSlice"

export default function WeeklyHabitEl ({newHabit}) {
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(addCount(newHabit.id))
    }
    return <div className="weeklyEl">
        <p>{newHabit.habit}</p>
        <p>{newHabit.repeatTimes}</p>
        <div>
          <button onClick={handleIncrement}>+</button>
          <span>{newHabit.count}</span>
          <button>-</button>
        </div>
    </div>
}

// {id: 'Oetab9f9M6X1D41geaS18', habit: 'to do this', repeatTimes: '7', count: 0}