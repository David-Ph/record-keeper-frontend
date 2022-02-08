import React from "react";

import Title from "../UI/Typography/Title";
import InputSecondary from "../UI/Input/InputSecondary";
import Button from "../UI/Button/Button";

function JournalHeader(props) {
  const onEnterHandler = (e) => {
    if (e.key !== "Enter") return;
  };

  return (
    <div className="flex justify-between border-b border-tertiary py-2">
      <Title>Journal Entries</Title>
      <div className="flex justify-between items-center w-full md:w-2/3">
        <Button>Add New Journal</Button>
        <InputSecondary
          onKeyDown={onEnterHandler}
          input={{ id: "search-journal" }}
          label="Search..."
          extraClasses="ml-2"
        />
      </div>
    </div>
  );
}

export default JournalHeader;
