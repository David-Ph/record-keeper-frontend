import {
  // addCampaign,
  // deleteCampaign,
  getCampaigns,
  // getOneCampaign,
  // editCampaign,
} from "../../lib/campaignApi";

import { campaignActions, initialCampaignState } from "./campaign-slice";

// functions to call API and call the reducers that change UI
export const getCampaignsData = (params, token) => {
  return async (dispatch) => {
    try {
      const campaignsData = await getCampaigns(params, token);

      if (campaignsData.status === 200) {
        dispatch(campaignActions.getAllCampaigns(campaignsData.data.data));
      }
    } catch (error) {
      // set error state
      dispatch(campaignActions.getAllCampaigns(initialCampaignState));
    }
  };
};
