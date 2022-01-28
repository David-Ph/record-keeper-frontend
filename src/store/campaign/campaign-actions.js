import {
  // addCampaign,
  // deleteCampaign,
  getCampaigns,
  // getOneCampaign,
  // editCampaign,
} from "../../lib/campaignApi";

import { HTTP_STATUS } from "../../hooks/useHttp";

import { campaignActions, initialCampaignState } from "./campaign-slice";
import { httpUIActions } from "../http-ui/http-ui-slice";

// functions to call API and call the reducers that change UI
export const getCampaignsData = (params, token) => {
  return async (dispatch) => {
    try {
      dispatch(httpUIActions.campaignHandler({ status: HTTP_STATUS.PENDING }));

      const campaignsData = await getCampaigns(params, token);

      if (campaignsData.status === 200) {
        dispatch(campaignActions.getAllCampaigns(campaignsData.data.data));
        dispatch(
          httpUIActions.campaignHandler({ status: HTTP_STATUS.COMPLETED })
        );
      }
    } catch (error) {
      // set error state
      dispatch(campaignActions.getAllCampaigns(initialCampaignState));
      dispatch(
        httpUIActions.campaignHandler({
          status: HTTP_STATUS.COMPLETED,
          error: error.message || "Something went wrong",
        })
      );
    }
  };
};
