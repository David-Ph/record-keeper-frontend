import React from "react";

import JournalHeader from "./JournalHeader";
import JournalInfo from "./JournalInfo";

function JournalBlock(props) {
  return (
    <section>
      <JournalHeader />
      <JournalInfo />
    </section>
  );
}

export default JournalBlock;
