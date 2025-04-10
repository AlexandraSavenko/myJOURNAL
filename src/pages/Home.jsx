import { useSelector } from "react-redux"

export function Home () {
    const weather = useSelector(state => state.weather.weatherData)
    const weatherIconCode = weather.weather[0].icon;
    const weatherIconURL = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`
    console.log(weather.weather[0])
    return <div> <h1>Home Page</h1>
    <img src={weatherIconURL} alt="" />
    </div>
}