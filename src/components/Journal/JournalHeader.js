import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import JournalForm from "./JournalForm";

import Title from "../UI/Typography/Title";
import InputSecondary from "../UI/Input/InputSecondary";
import Button from "../UI/Button/Button";

function JournalHeader() {
  const location = useLocation();
  const history = useHistory();
  const [showJournalForm, setShowJournalForm] = useState(false);

  const onEnterHandler = (e) => {
    if (e.key !== "Enter") return;

    const path = location.pathname;
    const search = e.target.value;

    let params = `?page=1`;
    if (search) params += `&search=${search}`;

    history.push(`${path}${params}`);
  };

  const onShowJournal = () => {
    setShowJournalForm(true);
  };

  const onHideJournal = () => {
    setShowJournalForm(false);
  };

  return (
    <div className="flex justify-between border-b border-tertiary py-2">
      <Title>Journal Entries</Title>
      <div className="flex justify-between items-center w-full md:w-2/3">
        <Button onClick={onShowJournal}>Add New Journal</Button>
        <InputSecondary
          onKeyDown={onEnterHandler}
          input={{ id: "search-journal" }}
          label="Search..."
          extraClasses="ml-2"
        />
      </div>
      {showJournalForm && <JournalForm onHide={onHideJournal} />}
    </div>
  );
}

export default JournalHeader;
