import React, { useContext } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthContext from "../../context/auth-context";
import { getJournalsAction } from "../../store/journal/journal-actions";

import JournalHeader from "./JournalHeader";
import JournalInfo from "./JournalInfo";

function JournalBlock(props) {
  const { token } = useContext(AuthContext);
  const { journalsList } = useSelector((state) => state.journal);
  const { activeCampaign } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();

  const id = activeCampaign._id;

  useEffect(() => {
    dispatch(getJournalsAction(`?campaignId=${id}`, token));
  }, [token, dispatch, id]);

  return (
    <section>
      <JournalHeader />
      <JournalInfo journals={journalsList} />
    </section>
  );
}

export default JournalBlock;
