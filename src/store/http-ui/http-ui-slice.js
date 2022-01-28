import { createSlice } from "@reduxjs/toolkit";

const initialHTTPUIState = {
  campaignStatus: null,
  campaignError: false,
};

const httpUISlice = createSlice({
  name: "http",
  initialState: initialHTTPUIState,
  reducers: {
    campaignHandler(state, action) {
      state.campaignStatus = action.payload.status;
      state.campaignError = action.payload.error;
    },
  },
});

export default httpUISlice.reducer;
export const httpUIActions = httpUISlice.actions;
