import React from "react";

import Logo from "../Logo/Logo";
import CampaignOptions from "../Campaign/CampaignOptions";

function MainNavigation() {
  return (
    <header>
      <div className="flex flex-col items-center justify-between bg-primary p-2 rounded-md md:flex-row border-2 border-black">
        <Logo />
        <div className="md:-order-last py-2 text-lg">Saltshakers</div>
      </div>
    </header>
  );
}

export default MainNavigation;
