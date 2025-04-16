import { createSlice } from "@reduxjs/toolkit";

export const dailyHabitsArr = (state) => state.dailyHabits.dailyHabitsList;
export const dailyHabitProgress = (state) => state.dailyHabits.dailyProgress;

export const slice = createSlice({
  name: "dailyHabits",
  initialState: {
    dailyHabitsList: [],
    dailyProgress: {},
    // isLoading: false,
    // error: false,
  },
  reducers: {
    addNewHabit: (state, action) => {
        state.dailyHabitsList.push(action.payload)
    },
    addCount: (state, action) => {
        const theHabit = state.dailyHabitsList.find(el => el.id === action.payload)
        if(theHabit && theHabit.repeat === 'Once'){
          theHabit.count += 1
        }
        if(theHabit && theHabit.count < Number(theHabit.repeatTimes)){
            theHabit.count += 1
        }
    },
    lowCount: (state, action) => {
      const theHabit = state.dailyHabitsList.find(el => el.id === action.payload)
      if(theHabit && theHabit.count < Number(theHabit.repeatTimes) && theHabit.count > 0){
          theHabit.count -= 1
      }
    },
    saveDailyProgress: (state, action) => {
    const {day, progress} = action.payload;   
    // state.dailyProgress[day] = progress || 0;
    // console.log(`day: ${day} progress:${progress} state: ${state.dailyProgress}`)
    if (day !== undefined && progress !== undefined) {
      state.dailyProgress[day] = progress;
      console.log(`✅ Updated progress: day ${day}, progress ${progress}`);
    } else {
      console.warn("⚠️ Missing 'day' or 'progress' in payload:", action.payload);
    }
  }
  }
});


export const {addNewHabit, addCount, lowCount, saveDailyProgress} = slice.actions;
export default slice.reducer;