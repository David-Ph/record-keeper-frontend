import { Route, useRouteMatch } from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import SectionBlock from "../../components/UI/SectionBlock/SectionBlock";

import CampaignBlock from "../../components/Campaign/CampaignBlock";
import Switcher from "../../components/Switcher/Switcher";
import JournalBlock from "../../components/Journal/JournalBlock";
import RecordBlock from "../../components/Record/RecordBlock";

import Title from "../../components/UI/Typography/Title";

function Dashboard() {
  const match = useRouteMatch();

  return (
    <Layout>
      <Route path={`${match.path}`}>
        <CampaignBlock />
        <Switcher />
      </Route>
      <SectionBlock>
        <Route path={`${match.path}`} exact>
          <Title>Select a campaign</Title>
        </Route>
        <Route path={`${match.path}/:campaignId`} exact>
          <Title>Select journal or record</Title>
        </Route>
        <Route path={`${match.path}/:campaignId/journals`}>
          <JournalBlock />
        </Route>
        <Route path={`${match.path}/:campaignId/records`}>
          <RecordBlock />
        </Route>
      </SectionBlock>
    </Layout>
  );
}

export default Dashboard;
