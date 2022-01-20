import { useContext } from "react";
import Layout from "../../components/Layout/Layout";

import CampaignInfo from "../../components/Campaign/CampaignInfo";
import { ProfiledropdownProvider } from "../../context/profileDropdown-context";
import ProfileDropdownContext from "../../context/profileDropdown-context";

function Dashboard() {
  const DropdownCtx = useContext(ProfileDropdownContext);

  const onClickHandler = () => {
    console.log("HELLO")
    DropdownCtx.click();
  };

  return (
    <ProfiledropdownProvider>
      <div className="hello" onClick={onClickHandler}>
        <Layout>
          <CampaignInfo />
        </Layout>
      </div>
    </ProfiledropdownProvider>
  );
}

export default Dashboard;
