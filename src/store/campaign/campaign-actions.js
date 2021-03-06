import {
  addCampaign,
  deleteCampaign,
  getCampaigns,
  getOneCampaign,
  editCampaign,
} from "../../lib/campaignApi";

import { HTTP_STATUS } from "../../hooks/useHttp";

import { campaignActions, initialCampaignState } from "./campaign-slice";
import { httpUIActions } from "../http-ui/http-ui-slice";

// functions to call API and call the reducers that change UI
export const getCampaignsAction = (params, token) => {
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

export const getOneCampaignAction = (campaignId, token) => {
  return async (dispatch) => {
    try {
      dispatch(httpUIActions.campaignHandler({ status: HTTP_STATUS.PENDING }));

      const campaign = await getOneCampaign(campaignId, token);

      if (campaign.status === 200) {
        dispatch(campaignActions.switchCampaign(campaign.data.data));
        dispatch(
          httpUIActions.campaignHandler({ status: HTTP_STATUS.COMPLETED })
        );
      }
    } catch (error) {
      dispatch(
        httpUIActions.campaignHandler({
          status: HTTP_STATUS.COMPLETED,
          error: error.message || "Something went wrong",
        })
      );
    }
  };
};

export const addCampaignAction = (campaignData, token, cb = () => {}) => {
  return async (dispatch) => {
    try {
      dispatch(
        httpUIActions.campaignPostStatus({ status: HTTP_STATUS.PENDING })
      );

      const campaign = await addCampaign(campaignData, token);

      if (campaign.status === 201) {
        dispatch(campaignActions.switchCampaign(campaign.data.data));
        dispatch(campaignActions.addCampaign(campaign.data.data));
        dispatch(
          httpUIActions.campaignPostStatus({ status: HTTP_STATUS.COMPLETED })
        );
        cb();
      }
    } catch (error) {
      dispatch(
        httpUIActions.campaignPostStatus({
          status: HTTP_STATUS.COMPLETED,
          error: error.message || "Something went wrong",
        })
      );
    }
  };
};

export const editCampaignAction = (
  campaignId,
  campaignData,
  token,
  cb = () => {}
) => {
  return async (dispatch) => {
    try {
      dispatch(
        httpUIActions.campaignPostStatus({ status: HTTP_STATUS.PENDING })
      );

      const campaign = await editCampaign(campaignId, campaignData, token);

      if (campaign.status === 201) {
        dispatch(campaignActions.switchCampaign(campaign.data.data));
        dispatch(campaignActions.editCampaign(campaign.data.data));
        dispatch(
          httpUIActions.campaignPostStatus({ status: HTTP_STATUS.COMPLETED })
        );
        cb();
      }
    } catch (error) {
      dispatch(
        httpUIActions.campaignPostStatus({
          status: HTTP_STATUS.COMPLETED,
          error: error.message || "Something went wrong",
        })
      );
    }
  };
};

export const deleteCampaignAction = (campaignId, token, cb = () => {}) => {
  return async (dispatch) => {
    try {
      dispatch(
        httpUIActions.campaignPostStatus({ status: HTTP_STATUS.PENDING })
      );

      const campaign = await deleteCampaign(campaignId, token);

      if (campaign.status === 200) {
        dispatch(campaignActions.switchCampaign(initialCampaignState));
        dispatch(campaignActions.deleteCampaign(campaignId));
        dispatch(
          httpUIActions.campaignPostStatus({ status: HTTP_STATUS.COMPLETED })
        );
        cb();
      }
    } catch (error) {
      dispatch(
        httpUIActions.campaignPostStatus({
          status: HTTP_STATUS.COMPLETED,
          error: error.message || "Something went wrong",
        })
      );
    }
  };
};
