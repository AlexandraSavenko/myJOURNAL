import { createSlice } from "@reduxjs/toolkit";

export const weeklyHabitsArr = (state) => state.weeklyHabits.weeklyHabitsList;
export const weeklyHabitProgress = (state) => state.weeklyHabits.weeklyProgress;

export const slice = createSlice({
  name: "weeklyHabits",
  initialState: {
    weeklyHabitsList: [],
    weeklyProgress: {},
    // isLoading: false,
    // error: false,
  },
  reducers: {
    addNewHabit: (state, action) => {
        state.weeklyHabitsList.push(action.payload)
    },
    addCount: (state, action) => {
        const theHabit = state.weeklyHabitsList.find(el => el.id === action.payload)
        if(theHabit && theHabit.repeat === 'Once'){
          theHabit.count += 1;
        }
        if(theHabit && theHabit.count < Number(theHabit.repeatTimes)){
            theHabit.count += 1
        }
    },
    lowCount: (state, action) => {
      const theHabit = state.weeklyHabitsList.find(el => el.id === action.payload)
      if(theHabit && theHabit.count < Number(theHabit.repeatTimes) && theHabit.count > 0){
          theHabit.count -= 1
      }
  },
  deleteHabit: (state, action) => {
    state.weeklyHabitsList = state.weeklyHabitsList.filter(habit => habit.id !== action.payload)
  },
  saveWeeklyProgress: (state, action) => {
    const {weekId, progress} = action.payload;   
    if (weekId !== undefined && progress !== undefined) {
      state.weeklyProgress[weekId] = progress;
    } else {
      console.warn("⚠️ Missing 'week id' or 'progress' in payload:", action.payload);
    }
  }
  }
});


export const {addNewHabit, addCount, lowCount, deleteHabit, saveWeeklyProgress} = slice.actions;
export default slice.reducer;