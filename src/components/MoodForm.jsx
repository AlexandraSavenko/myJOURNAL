import { useDispatch } from "react-redux"
import { saveMood } from "../redux/moodSlice"
import css from '../scss/MoodForm.module.scss'

export default function MoodForm(){
    const now = new Date().getDate()
    const dispatch = useDispatch()
    const handleMoodChange = (mood) => {
dispatch(saveMood({day: now, mood }))
    }
    return <div className={css.moodForm}>
        <div className={css.happy} onClick={() => handleMoodChange('happy')}>Happy</div>
        <div className={css.sad} onClick={() => handleMoodChange('sad')}>Sad</div>
        <div className={css.tired} onClick={() => handleMoodChange('tired')}>Tired</div>
        <div className={css.angry} onClick={() => handleMoodChange('angry')}>Angry</div>
        <div className={css.furious} onClick={() => handleMoodChange('furious')}>Furious</div>
    </div>
}