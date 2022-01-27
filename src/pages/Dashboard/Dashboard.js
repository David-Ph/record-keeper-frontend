import { useDispatch } from "react-redux";

import Layout from "../../components/Layout/Layout";

import CampaignInfo from "../../components/Campaign/CampaignInfo";


function Dashboard() {
  const dispatch = useDispatch();

  return (
    <Layout>
      <CampaignInfo />
    </Layout>
  );
}

export default Dashboard;
