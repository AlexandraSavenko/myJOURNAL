import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const key = 'dac74088e266b87807088a89c36b789d'
axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5'

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
async ({lat, lon}, thunkAPI) => {
    try {
        const response = await axios.get('/weather', {
            params: {
                lat,
                lon,
                appid: key,
                units: 'metric',
            }
        })
        // console.log(response.data)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)

