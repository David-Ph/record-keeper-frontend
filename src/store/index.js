import { configureStore } from "@reduxjs/toolkit";

import campaignReducer from "./campaign-slice";
import dropdownReducer from "./profiledropdown-slice";

const store = configureStore({
  reducer: {
    campaign: campaignReducer,
    profileDropdown: dropdownReducer,
  },
});

export default store;
