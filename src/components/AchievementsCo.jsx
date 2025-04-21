export default function AchievementsCo ({totalDone, goal}) {
    const percentage = Math.min((totalDone / goal) * 100, 100); // cap at 100%

    return <div style={{
        width: '30px',
        height: '60px',
        border: '1px solid black',
        display: 'flex',
        flexDirection: "column-reverse",
    }}>
<div style={{
    width: "100%",
    height: `${percentage}%`,
    backgroundColor: "red",
}}></div>
    </div>
}