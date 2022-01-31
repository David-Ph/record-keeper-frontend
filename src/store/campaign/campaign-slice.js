import { createSlice } from "@reduxjs/toolkit";

export const initialCampaignState = {
  activeCampaign: {
    title: "No Campaign Selected",
    dungeonMaster: "No Campaign Selected",
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
      state.campaignsList = action.payload || [];
    },
    switchCampaign(state, action) {
      state.activeCampaign = action.payload;
    },
    addCampaign(state, action) {
      state.campaignsList.unshift(action.payload);
    },
    deleteCampaign(state, action) {
      const previousList = state.campaignsList;
      state.campaignsList = previousList.filter((campaign) => {
        return campaign._id !== action.payload;
      });
      state.activeCampaign = initialCampaignState.activeCampaign;
    },
    editCampaign(state, action) {
      const previousList = state.campaignsList;
      state.campaignsList = previousList.map((campaign) => {
        if (campaign._id === action.payload._id) {
          return action.payload;
        }
        return campaign;
      });
      state.activeCampaign = action.payload;
    },
  },
});

export default campaignSlice.reducer;
export const campaignActions = campaignSlice.actions;
