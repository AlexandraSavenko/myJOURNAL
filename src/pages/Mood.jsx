import { useSelector } from "react-redux";
import MoodForm from "../components/MoodForm";
import { moodTrackerList } from "../redux/moodSlice";

export function Mood (){
    const myMood = useSelector(moodTrackerList)
    console.log(myMood)

    return <div>
        <MoodForm/>
    <h1>Mood</h1>
    
    </div>
}