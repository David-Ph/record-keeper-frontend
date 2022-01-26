import { createSlice } from "@reduxjs/toolkit";

const initialCampaignState = {
  activeTitle: "No Campaign Selected",
  activeDM: "No Campaign Selected",
  activeStatus: "No Campaign Selected",
  activeDescription: "No Campaign Selected",
  activeId: "",
  campaignsList: [],
};

const campaignSlice = createSlice({
  name: "campaign",
  initialState: initialCampaignState,
  reducers: {
    switchCampaign() {},
    getAllCampaigns() {},
    addCampaign() {},
  },
});

export default campaignSlice.reducer;
export const campaignActions = campaignSlice.actions;
