import { createSlice } from "@reduxjs/toolkit";

export const dailyHabitsArr = (state) => state.weeklyHabits.weeklyHabitsList
export const slice = createSlice({
  name: "dailyHabits",
  initialState: {
    dailyHabitsList: [],
    // isLoading: false,
    // error: false,
  },
  reducers: {
    addNewHabit: (state, action) => {
        state.dailyHabitsList.push(action.payload)
    },
    addCount: (state, action) => {
        const theHabit = state.dailyHabitsList.find(el => el.id === action.payload)
        if(theHabit && theHabit.count < Number(theHabit.repeatTimes)){
            theHabit.count += 1
        }
    },
    lowCount: (state, action) => {
      const theHabit = state.dailyHabitsList.find(el => el.id === action.payload)
      if(theHabit && theHabit.count < Number(theHabit.repeatTimes) && theHabit.count > 0){
          theHabit.count -= 1
      }
  }
  }
});


export const {addNewHabit, addCount, lowCount} = slice.actions;
export default slice.reducer;