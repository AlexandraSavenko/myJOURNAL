export default function WeeklyHabitEl ({newHabit}) {
    return <div className="weeklyEl">
        <p>{newHabit.habit}</p>
        <p>{newHabit.repeatTimes}</p>
        <div>
          <button>+</button>
          <span>{newHabit.count}</span>
          <button>-</button>
        </div>
    </div>
}

// {id: 'Oetab9f9M6X1D41geaS18', habit: 'to do this', repeatTimes: '7', count: 0}