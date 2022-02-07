import React from "react";

import Title from "../UI/Typography/Title";
import InputSecondary from "../UI/Input/InputSecondary";

function RecordHeader(props) {
  const onEnterHandler = (e) => {
    if (e.key !== "Enter") return;
  };
  return (
    <div className="flex justify-between">
      <Title>Records</Title>
      <InputSecondary
        onKeyDown={onEnterHandler}
        input={{ id: "search-records" }}
        label="Search..."
      />
    </div>
  );
}

export default RecordHeader;
