import { createSlice } from "@reduxjs/toolkit";

export const moodTrackerList = (state) => state.moodTracker.moodList
const slice = createSlice({
    name: 'moodToday',
    initialState: {
        moodList: {
            17: 'furious',
            18: 'sad',
            19: 'happy',
            20: 'tired',
        },
    },
    reducers: {
    saveMood: (state, action) => {
        const {day, mood} = action.payload;
        if(day && mood){
            state.moodList[day] = mood;
        }
    }
    }
})

export const {saveMood} = slice.actions;
export default slice.reducer