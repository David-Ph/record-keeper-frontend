import React from "react";

import Title from "../UI/Typography/Title";
import InputSecondary from "../UI/Input/InputSecondary";

function JournalHeader(props) {
  const onEnterHandler = (e) => {
    if (e.key !== "Enter") return;
  };
  return (
    <div className="flex justify-between">
      <Title>Journal Entries</Title>
      <InputSecondary
        onKeyDown={onEnterHandler}
        input={{ id: "search-journal" }}
        label="Search..."
      />
    </div>
  );
}

export default JournalHeader;
