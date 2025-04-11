import {configureStore} from '@reduxjs/toolkit'
import weatherReducer from './weatherSlice'
import weeklyHabbitReducer from './weeklyHabitsSlice'
export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        weeklyHabits: weeklyHabbitReducer,
    },
});