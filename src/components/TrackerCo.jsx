import clsx from 'clsx';
import css from '../scss/TrackerCo.module.scss'
import { useSelector } from 'react-redux';
import { dailyHabitProgress } from '../redux/dailyHabitsSlice';
export default function TrackerCo () {
    const myProgress = useSelector(dailyHabitProgress)
console.log(myProgress)
    function getColorClass(percent) {
        if (percent === 0) return 'progress-0';
        if (percent <= 20) return 'progress-20';
        if (percent <= 40) return 'progress-40';
        if (percent <= 60) return 'progress-60';
        if (percent <= 80) return 'progress-80';
        return 'progress-100';
      }

    const daysInMonthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const now = new Date ()
    const currentMonth = now.getMonth()
    const currentYear = now.getFullYear()
    const currentDaysInMonth = daysInMonthList[now.getMonth()]
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); 
    const adjustedFirstDay = (firstDayOfMonth + 6) % 7;

    const calendarArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    for (let i = 0; i < adjustedFirstDay; i++) {
        calendarArr.push(null);
      }
    for (let i = 1; i<= currentDaysInMonth; i++){
        calendarArr.push(i)
    }
   

    // const dayClass = clsx('day', {        
    //     'progress-0': progress === 0,
    //     'progress-20': progress >= 20 && progress < 40,
    //     'progress-40': progress >= 40 && progress < 60,
    //     'progress-60': progress >= 60 && progress < 80,
    //     'progress-80': progress >= 80 && progress < 100,
    //     'progress-100': progress === 100,

    // })
    return <div className={css.tracker}>
<p>Current month</p>
<div className={css.days}>
{/* {calendarArr.map((el, i) => <div key={i} id={el ? el : 'x'} className={css.x}>{el}</div>)} */}
{calendarArr.map((day, index) => {
//   const dateKey = day
//     ? `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
//     : null;

const dateKey = day || null;

  const percent = myProgress[dateKey] || 0;
  const colorClass = getColorClass(percent);

  return (
    <div
      key={index}
      className={`${css.day} ${day ? css[colorClass] : css.empty}`}
    >
      {day}
    </div>
  );
})}
</div>
    </div>
    
}