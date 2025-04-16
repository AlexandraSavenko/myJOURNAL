import {configureStore} from '@reduxjs/toolkit'
import weatherReducer from './weatherSlice'
import weeklyHabitReducer from './weeklyHabitsSlice'
import dailyHabitReducer from './dailyHabitsSlice'
import moodTrackerReducer from './moodSlice'
export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        moodTracker: moodTrackerReducer,
        weeklyHabits: weeklyHabitReducer,
        dailyHabits: dailyHabitReducer,
    },
});