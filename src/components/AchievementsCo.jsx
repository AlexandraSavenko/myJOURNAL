import css from '../scss/Achievements.module.scss'
export default function AchievementsCo ({totalDone, goal}) {
    const percentage = Math.min((totalDone / goal) * 100, 100); // cap at 100%

    return <div className={css.bar}>
<div className={css.fill} style={{
    height: `${percentage}%`,
}}></div>
    </div>
}