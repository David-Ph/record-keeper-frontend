import { createSlice } from "@reduxjs/toolkit";

export const initialJournalState = {
  journalsList: [],
  journalsCount: 0,
};

// reducers to change UI
const journalSlice = createSlice({
  name: "journal",
  initialState: initialJournalState,
  reducers: {
    getAllJournals(state, action) {
      state.journalsList = action.payload.journalsList || [];
      state.journalsCount = action.payload.journalsCount || [];
    },
    deleteJournal(state, action) {
      const previousList = state.journalsList;
      state.journalsList = previousList.filter((journal) => {
        return journal._id !== action.payload;
      });
    },
  },
});

export default journalSlice.reducer;
export const journalActions = journalSlice.actions;
