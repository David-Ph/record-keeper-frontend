import { createSlice } from "@reduxjs/toolkit";

export const initialCampaignState = {
  activeCampaign: {
    title: "No Campaign Selected",
    DM: "No Campaign Selected",
    status: "No Campaign Selected",
    description: "No Campaign Selected",
    id: "",
  },
  campaignsList: [],
  /* 
    campaignsList would probably only contain campaign name and id
  */
};

// reducers to change UI
const campaignSlice = createSlice({
  name: "campaign",
  initialState: initialCampaignState,
  reducers: {
    getAllCampaigns(state, action) {
      state.campaignsList = action.payload;
    },
    switchCampaign(state, action) {
      state.activeCampaign = action.payload;
    },
    addCampaign() {},
  },
});

export default campaignSlice.reducer;
export const campaignActions = campaignSlice.actions;
