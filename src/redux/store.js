import {configureStore} from '@reduxjs/toolkit'
import weatherReducer from './weatherSlice'
import weeklyHabitReducer from './weeklyHabitsSlice'
import dailyHabitReducer from './dailyHabitsSlice'
export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        weeklyHabits: weeklyHabitReducer,
        dailyHabits: dailyHabitReducer,
    },
});