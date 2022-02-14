import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

import Link from "../UI/Linker/Linker";

function Switcher() {
  const match = useRouteMatch();
  const campaignsData = useSelector((state) => state.campaign);

  return (
    <div className="bg-primary w-full shadow-lg">
      <div className="flex h-14">
        <Link
          target={`${match.path}/${campaignsData.activeCampaign._id}/journals?page=1`}
        >
          Journal Entries
        </Link>
        <Link
          target={`${match.path}/${campaignsData.activeCampaign._id}/records?page=1`}
        >
          Records
        </Link>
      </div>
    </div>
  );
}

export default Switcher;
