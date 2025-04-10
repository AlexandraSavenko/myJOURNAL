import { useSelector } from "react-redux"

export function Home () {
    const weather = useSelector(state => state.weather.weatherData)
    console.log(weather.weather[0])
    return <div> <h1>Home Page</h1>

    </div>
}