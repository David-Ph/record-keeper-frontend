import { configureStore } from "@reduxjs/toolkit";

import campaignReducer from "./campaign/campaign-slice";
import dropdownReducer from "./profile/profiledropdown-slice";

const store = configureStore({
  reducer: {
    campaign: campaignReducer,
    profileDropdown: dropdownReducer,
  },
});

export default store;
