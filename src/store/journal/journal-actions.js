import { getJournals, deleteJournal } from "../../lib/JournalApi";

import { HTTP_STATUS } from "../../hooks/useHttp";

import { journalActions, initialJournalState } from "./journal-slice";
import { httpUIActions } from "../http-ui/http-ui-slice";

// functions to call API and call the reducers that change UI
export const getJournalsAction = (params, token) => {
  return async (dispatch) => {
    try {
      dispatch(httpUIActions.journalHandler({ status: HTTP_STATUS.PENDING }));

      const journalsData = await getJournals(params, token);

      if (journalsData.status === 200) {
        dispatch(journalActions.getAllJournals(journalsData.data.data));
        dispatch(
          httpUIActions.journalHandler({ status: HTTP_STATUS.COMPLETED })
        );
      }
    } catch (error) {
      dispatch(journalActions.getAllJournals(initialJournalState));
      dispatch(
        httpUIActions.journalHandler({
          status: HTTP_STATUS.COMPLETED,
          error: error.message || "Something went wrong",
        })
      );
    }
  };
};

// export const addCampaignAction = (campaignData, token, cb = () => {}) => {
//   return async (dispatch) => {
//     try {
//       dispatch(
//         httpUIActions.campaignPostStatus({ status: HTTP_STATUS.PENDING })
//       );

//       const campaign = await addCampaign(campaignData, token);

//       if (campaign.status === 201) {
//         dispatch(journalActions.switchCampaign(campaign.data.data));
//         dispatch(journalActions.addCampaign(campaign.data.data));
//         dispatch(
//           httpUIActions.campaignPostStatus({ status: HTTP_STATUS.COMPLETED })
//         );
//         cb();
//       }
//     } catch (error) {
//       dispatch(
//         httpUIActions.campaignPostStatus({
//           status: HTTP_STATUS.COMPLETED,
//           error: error.message || "Something went wrong",
//         })
//       );
//     }
//   };
// };

// export const editCampaignAction = (
//   journalId,
//   campaignData,
//   token,
//   cb = () => {}
// ) => {
//   return async (dispatch) => {
//     try {
//       dispatch(
//         httpUIActions.campaignPostStatus({ status: HTTP_STATUS.PENDING })
//       );

//       const campaign = await editCampaign(journalId, campaignData, token);

//       if (campaign.status === 201) {
//         dispatch(journalActions.switchCampaign(campaign.data.data));
//         dispatch(journalActions.editCampaign(campaign.data.data));
//         dispatch(
//           httpUIActions.campaignPostStatus({ status: HTTP_STATUS.COMPLETED })
//         );
//         cb();
//       }
//     } catch (error) {
//       dispatch(
//         httpUIActions.campaignPostStatus({
//           status: HTTP_STATUS.COMPLETED,
//           error: error.message || "Something went wrong",
//         })
//       );
//     }
//   };
// };

export const deleteJournalAction = (journalId, token, cb = () => {}) => {
  return async (dispatch) => {
    try {
      dispatch(
        httpUIActions.journalPostStatus({ status: HTTP_STATUS.PENDING })
      );

      const journal = await deleteJournal(journalId, token);

      console.log(journal);

      if (journal.status === 200) {
        dispatch(journalActions.deleteJournal(journalId));
        dispatch(
          httpUIActions.journalPostStatus({ status: HTTP_STATUS.COMPLETED })
        );
        cb();
      }
    } catch (error) {
      dispatch(
        httpUIActions.journalPostStatus({
          status: HTTP_STATUS.COMPLETED,
          error: error.message || "Something went wrong",
        })
      );
    }
  };
};
