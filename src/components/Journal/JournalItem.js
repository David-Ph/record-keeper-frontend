import React, { useState } from "react";

import JournalDetail from "./JournalDetail";

function JournalItem(props) {
  const [showJournalDetail, setShowJournalDetail] = useState(false);

  const onJournalClick = (event) => {
    if (event.target.classList.contains("modalBackdrop")) return;

    setShowJournalDetail(true);
  };

  const onHideJournal = () => {
    setShowJournalDetail(false);
  };

  return (
    <div
      onClick={onJournalClick}
      className="p-2 rounded-md w-full max-w-[280px] shadow-lg border border-slate-400  flex flex-col hover:scale-105 hover:cursor-pointer transition-all duration-200"
    >
      {props.children}
      {showJournalDetail && (
        <JournalDetail
          id={props.id}
          key={props.id}
          onHide={onHideJournal}
          title={props.title}
          body={props.body}
        />
      )}
    </div>
  );
}

export default JournalItem;
