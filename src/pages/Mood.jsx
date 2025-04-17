import { useSelector } from "react-redux";
import MoodForm from "../components/MoodForm";
import TrackerCo from "../components/TrackerCo";
import { moodTrackerList } from "../redux/moodSlice";
import css from '../scss/Mood.module.scss';

export function Mood (){
    const myMood = useSelector(moodTrackerList)

    function getColorClass(percent) {
        if (percent === 0) return "progress-0";
        if (percent <= 20) return "progress-20";
        if (percent <= 40) return "progress-40";
        if (percent <= 60) return "progress-60";
        if (percent <= 80) return "progress-80";
        return "progress-100";
      }
    

    return <div>
        <MoodForm/>
    <h1 className={css.header}>Mood</h1>
    <TrackerCo getColorClass={getColorClass} progressData={myMood}/>
    </div>
}