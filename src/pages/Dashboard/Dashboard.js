import { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";

import Layout from "../../components/Layout/Layout";

import CampaignInfo from "../../components/Campaign/CampaignInfo";

import { getCampaignsData } from "../../store/campaign/campaign-actions";
import AuthContext from "../../context/auth-context";

function Dashboard() {
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampaignsData("", token));
  }, [token, dispatch]);

  return (
    <Layout>
      <CampaignInfo />
    </Layout>
  );
}

export default Dashboard;
