import { useSelector } from "react-redux"

export function Home () {
    const {weatherData, isLoading, error} = useSelector(state => state.weather)
    
    // const weatherIconCode = weatherData.weather[0].icon;
    const weatherIconURL = weatherData?.weather ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png` : null;
    return <div className="container"> <h1>Home Page</h1>
    {isLoading && <p>Weather loading</p> }
    {error && <p>Sorry, something went wrong</p> }
{  weatherData && <img src={weatherIconURL} alt="" />}
    </div>
}