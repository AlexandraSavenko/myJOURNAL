import { useDispatch } from "react-redux"
import { saveMood } from "../redux/moodSlice"

export default function MoodForm(){
    const now = new Date().getDate()
    const dispatch = useDispatch()
    const handleMoodChange = (mood) => {
dispatch(saveMood({day: now, mood }))
    }
    return <div className="moodForm">
        <div onClick={() => handleMoodChange('happy')}>Happy</div>
        <div onClick={() => handleMoodChange('sad')}>Sad</div>
        <div onClick={() => handleMoodChange('tired')}>Tired</div>
        <div onClick={() => handleMoodChange('angry')}>Angry</div>
        <div onClick={() => handleMoodChange('furious')}>Furious</div>
    </div>
}