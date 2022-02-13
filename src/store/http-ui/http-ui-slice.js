import { createSlice } from "@reduxjs/toolkit";

const initialHTTPUIState = {
  campaignStatus: null,
  campaignError: false,
  campaignPostStatus: null,
  journalStatus: null,
  journalError: false,
  journalPostStatus: null,
  recordStatus: null,
  recordError: false,
  recordPostStatus: null,
};

const httpUISlice = createSlice({
  name: "http",
  initialState: initialHTTPUIState,
  reducers: {
    campaignHandler(state, action) {
      state.campaignStatus = action.payload.status;
      state.campaignError = action.payload.error;
    },
    campaignPostStatus(state, action) {
      state.campaignPostStatus = action.payload.status;
      state.campaignError = action.payload.error;
    },
    journalHandler(state, action) {
      state.journalStatus = action.payload.status;
      state.journalError = action.payload.error;
    },
    journalPostStatus(state, action) {
      state.journalPostStatus = action.payload.status;
      state.journalError = action.payload.error;
    },
    recordHandler(state, action) {
      state.recordStatus = action.payload.status;
      state.recordError = action.payload.error;
    },
    recordPostStatus(state, action) {
      state.recordPostStatus = action.payload.status;
      state.recordError = action.payload.error;
    },
  },
});

export default httpUISlice.reducer;
export const httpUIActions = httpUISlice.actions;
