import { createSlice } from "@reduxjs/toolkit";

const initialDropdownState = {
  showDropdown: false,
};

const dropdownSlice = createSlice({
  name: "profile-dropdown",
  initialState: initialDropdownState,
  reducers: {
    clickHandler(state, action) {
      if (action.payload) {
        state.showDropdown = !state.showDropdown;
      } else {
        state.showDropdown = false;
      }
    },
  },
});

export default dropdownSlice.reducer;
export const dropdownActions = dropdownSlice.actions;
