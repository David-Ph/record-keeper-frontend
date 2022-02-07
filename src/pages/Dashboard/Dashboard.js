import { Route, useRouteMatch } from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import SectionBlock from "../../components/UI/SectionBlock/SectionBlock";

import CampaignBlock from "../../components/Campaign/CampaignBlock";
import Switcher from "../../components/Switcher/Switcher";

const Journal = () => {
  return <h1>Hello Journal</h1>;
};

const Record = () => {
  return <h1>Hello Record</h1>;
};

function Dashboard() {
  const match = useRouteMatch();

  return (
    <Layout>
      <Route path={`${match.path}`}>
        <CampaignBlock />
        <Switcher />
      </Route>
      <SectionBlock>
        <Route path={`${match.path}/:campaignId/journals`}>
          <Journal />
        </Route>
        <Route path={`${match.path}/:campaignId/records`}>
          <Record />
        </Route>
      </SectionBlock>
    </Layout>
  );
}

export default Dashboard;
