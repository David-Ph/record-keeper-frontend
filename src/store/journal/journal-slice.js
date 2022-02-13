import { createSlice } from "@reduxjs/toolkit";

export const initialJournalState = {
  journalsList: [],
};

// reducers to change UI
const journalSlice = createSlice({
  name: "campaign",
  initialState: initialJournalState,
  reducers: {
    getAllJournals(state, action) {
      state.journalsList = action.payload || [];
    },
  },
});

export default journalSlice.reducer;
export const journalActions = journalSlice.actions;
