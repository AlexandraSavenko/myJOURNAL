import { useSelector } from "react-redux";
import MoodForm from "../components/MoodForm";
import TrackerCo from "../components/TrackerCo";
import { moodTrackerList } from "../redux/moodSlice";
import css from '../scss/Mood.module.scss';

export function Mood (){
    const myMood = useSelector(moodTrackerList)

    function getColorClass(percent) {
        if (percent === 0) return "progress-0";
        if (percent === 'happy') return "mood-happy";
        if (percent === 'sad') return "mood-sad";
        if (percent === 'tired') return "mood-tired";
        if (percent === 'angry') return "mood-angry";
        return "mood-furious";
      }
    

    return <div>
        <MoodForm/>
    <h1 className={css.header}>Mood</h1>
    <TrackerCo getColorClass={getColorClass} progressData={myMood}/>
    </div>
}