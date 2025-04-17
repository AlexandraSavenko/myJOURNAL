import css from "../scss/TrackerCo.module.scss";
import { useSelector } from "react-redux";
import { dailyHabitProgress } from "../redux/dailyHabitsSlice";
export default function TrackerCo() {
  const myProgress = useSelector(dailyHabitProgress);
  function getColorClass(percent) {
    if (percent === 0) return "progress-0";
    if (percent <= 20) return "progress-20";
    if (percent <= 40) return "progress-40";
    if (percent <= 60) return "progress-60";
    if (percent <= 80) return "progress-80";
    return "progress-100";
  }

  const daysInMonthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const currentDaysInMonth = daysInMonthList[now.getMonth()];
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const adjustedFirstDay = (firstDayOfMonth + 6) % 7;

  const calendarArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  for (let i = 0; i < adjustedFirstDay; i++) {
    calendarArr.push(null);
  }
  for (let i = 1; i <= currentDaysInMonth; i++) {
    calendarArr.push(i);
  }

  return (
    <div className={css.tracker}>
      <p>Current month</p>
      <div className={css.days}>
        {calendarArr.map((day, index) => {
          const dateKey = day || null;

          const percent = myProgress[dateKey] || 0;
          const colorClass = getColorClass(percent);

          return (
            <div
              key={index}
              className={`${css.day} ${day ? css[colorClass] : css.empty}`}>
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
