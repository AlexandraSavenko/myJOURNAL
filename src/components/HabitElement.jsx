// import { useDispatch } from "react-redux"
// import { addCount, lowCount } from "../redux/weeklyHabitsSlice"
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import css from '../scss/HabitElement.module.scss'

export default function HabitElement ({newHabit, onPlus, onMinus, onDelete}) {
    return <div className={css.weeklyEl}>
        <p>{newHabit.habit}</p>
        {newHabit.repeat === "Many" ? <div className={css.count}>
        <button onClick={()=> onPlus(newHabit.id)}>+</button>
        <span>{newHabit.count}</span>
        <button onClick={()=> onMinus(newHabit.id)}>-</button> 
        <p>{newHabit.repeatTimes}</p>       
        </div> : <button onClick={()=> onPlus(newHabit.id)}>done</button> }
        <div className="result">{newHabit.repeat === "Once" ? newHabit.count === 1 && <FaRegFaceSmileBeam /> :
            newHabit.count === Number(newHabit.repeatTimes) &&  <FaRegFaceSmileBeam />
            }
        </div>
        <button onClick={() => onDelete(newHabit.id)}>Del</button>
    </div>
}

// {id: 'Oetab9f9M6X1D41geaS18', habit: 'to do this', repeatTimes: '7', count: 0}