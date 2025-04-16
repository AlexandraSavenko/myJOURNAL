import { createSlice } from "@reduxjs/toolkit";

export const moodTrackerList = (state) => state.moodTracker.moodList

const slice = createSlice({
    name: 'moodToday',
    initialState: {
        moodList: {},
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

console.log(slice.actions)
export const {saveMood} = slice.actions;
export default slice.reducer