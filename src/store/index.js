import { configureStore } from "@reduxjs/toolkit";

import campaignReducer from "./campaign/campaign-slice";
import journalReducer from "./journal/journal-slice";
import dropdownReducer from "./profile/profiledropdown-slice";
import httpUIReducer from "./http-ui/http-ui-slice";

const store = configureStore({
  reducer: {
    campaign: campaignReducer,
    journal: journalReducer,
    profileDropdown: dropdownReducer,
    httpUI: httpUIReducer,
  },
});

export default store;
