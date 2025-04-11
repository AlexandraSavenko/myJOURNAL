import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts } from "./contactsOps";
// import { addContact, deleteContact } from "./contactsOps";

export const slice = createSlice({
  name: "weeklyHabits",
  initialState: {
    weeklyHabits: [],
    // isLoading: false,
    // error: false,
  },
  reducers: {
    addNewHabit: (state, action) => {
        state.weeklyHabits.push(action.payload)
    }
  }
});


export const {addNewHabit} = slice.actions;
export default slice.reducer;