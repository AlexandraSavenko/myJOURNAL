import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts } from "./contactsOps";
// import { addContact, deleteContact } from "./contactsOps";
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
    }
  }
});


export const {addNewHabit} = slice.actions;
export default slice.reducer;