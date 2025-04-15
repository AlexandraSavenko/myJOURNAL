import css from '../scss/TrackerCo.module.scss'
export default function TrackerCo () {
    const daysInMonthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const now = new Date ()
    // const currentDay = shortDays[now.getDay()]
    // const currentDate = now.getDate()
    // const currentMonth = shortMonths[now.getMonth()]
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
    return <div className={css.tracker}>
<p>Current month</p>
<div className={css.days}>
{calendarArr.map((el, i) => <div key={i} id={el ? el : 'x'} className={css.day}>{el}</div>)}
</div>
    </div>
    
}