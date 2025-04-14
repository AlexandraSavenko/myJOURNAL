import {configureStore} from '@reduxjs/toolkit'
import weatherReducer from './weatherSlice'
import weeklyHabbitReducer from './weeklyHabitsSlice'
import dailyHabitReducer from './dailyHabitsSlice'
export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        weeklyHabits: weeklyHabbitReducer,
        dailyHabits: dailyHabitReducer,
    },
});