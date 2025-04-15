import { createSlice } from "@reduxjs/toolkit";

export const weeklyHabitsArr = (state) => state.weeklyHabits.weeklyHabitsList
export const slice = createSlice({
  name: "weeklyHabits",
  initialState: {
    weeklyHabitsList: [],
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
  }
  }
});


export const {addNewHabit, addCount, lowCount, deleteHabit} = slice.actions;
export default slice.reducer;