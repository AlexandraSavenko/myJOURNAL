const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const shortMonths = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
export default function DateDisplay (){
    const now = new Date ()
    const currentDay = shortDays[now.getDay()]
    const currentDate = now.getDate()
    const currentMonth = shortMonths[now.getMonth()]
    return <p>{`${currentDay}, ${currentMonth} ${currentDate}`}</p>
}