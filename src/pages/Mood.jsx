// import { useSelector } from "react-redux";
import MoodForm from "../components/MoodForm";
// import { moodTrackerList } from "../redux/moodSlice";
import css from '../scss/Mood.module.scss';

export function Mood (){
    // const myMood = useSelector(moodTrackerList)

    

    return <div>
        <MoodForm/>
    <h1 className={css.header}>Mood</h1>
    
    </div>
}