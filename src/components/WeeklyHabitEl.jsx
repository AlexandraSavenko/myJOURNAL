export default function WeeklyHabitEl ({newHabit}) {
    return <div className="weeklyEl">
        <p>{newHabit.habit}</p>
        <p>{newHabit.repeatTimes}</p>
    </div>
}

// {id: 'Oetab9f9M6X1D41geaS18', habit: 'to do this', repeatTimes: '7'}