import { createSlice } from "@reduxjs/toolkit";
import {fetchWeather} from './weatherOp'

const weatherSlice = createSlice({
    name: 'weatherToday',
    initialState: {
        weatherData: null,
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchWeather.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.weatherData = action.payload;
        })
        .addCase(fetchWeather.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default weatherSlice.reducer