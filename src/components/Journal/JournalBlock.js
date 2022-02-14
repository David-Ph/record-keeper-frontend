import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AuthContext from "../../context/auth-context";
import { getJournalsAction } from "../../store/journal/journal-actions";

import JournalHeader from "./JournalHeader";
import JournalInfo from "./JournalInfo";
import JournalFooter from "./JournalFooter";

function JournalBlock(props) {
  const { token } = useContext(AuthContext);
  const location = useLocation();
  const { journalsList, journalsCount } = useSelector((state) => state.journal);
  const { activeCampaign } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();
  const id = activeCampaign._id;

  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page");
  const search = queryParams.get("search");

  let params = `?campaignId=${id}`
  if(page) params += `&page=${page}`;
  if(search) params += `&search=${search}`;

  useEffect(() => {
    dispatch(getJournalsAction(`${params}`, token));
  }, [token, dispatch, params]);

  return (
    <section>
      <JournalHeader />
      <JournalInfo journals={journalsList} />
      <JournalFooter count={journalsCount} />
    </section>
  );
}

export default JournalBlock;
