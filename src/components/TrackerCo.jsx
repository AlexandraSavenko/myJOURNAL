import clsx from "clsx";
import css from "../scss/TrackerCo.module.scss";

export default function TrackerCo({ getColorClass, progressData }) {
  

  const daysInMonthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const monthsList = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
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
      <p className={css.month}>{monthsList[currentMonth]}</p>
      <div className={css.days}>
        {calendarArr.map((day, index) => {
          const dateKey = day || null;

          const percent = progressData[dateKey] || 0;
          const mood = progressData[dateKey]

          function getDayMood (mood) {
            switch (mood){
              case 'happy': return <span>&#128513;</span>;
              case 'sad': return <span>&#128530;</span>;
              case 'tired': return <span>&#129397;</span>;
              case 'angry': return <span>&#128545;</span>;
              case 'furious': return <span>&#129324;</span>;
            }
          }

          const dayMood = getDayMood(mood)

          const colorClass = getColorClass(percent);

          return (
            <div
              key={index}
              className={`${css.day} ${day ? css[colorClass] : css.empty}`}>
              <span className={clsx(typeof mood === 'string' && css.dayDate)}> {day}</span>
              {typeof mood === 'string' && <span>{dayMood}</span> }
            </div>
          );
        })}
      </div>
    </div>
  );
}
