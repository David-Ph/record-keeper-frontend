import { createSlice } from "@reduxjs/toolkit";

export const initialJournalState = {
  journalsList: [],
};

// reducers to change UI
const journalSlice = createSlice({
  name: "journal",
  initialState: initialJournalState,
  reducers: {
    getAllJournals(state, action) {
      state.journalsList = action.payload || [];
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
