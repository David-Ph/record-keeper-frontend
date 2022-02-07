import React from "react";

import Title from "../UI/Typography/Title";
import InputSecondary from "../UI/Input/InputSecondary";
import Button from "../UI/Button/Button";

function RecordHeader(props) {
  const onEnterHandler = (e) => {
    if (e.key !== "Enter") return;
  };
  return (
    <div className="flex justify-between">
      <Title>Records</Title>
      <div className="flex justify-between items-center w-full md:w-2/3">
        <Button>Add New Record</Button>
        <InputSecondary
          onKeyDown={onEnterHandler}
          input={{ id: "search-record" }}
          label="Search..."
          extraClasses="ml-2"
        />
      </div>
    </div>
  );
}

export default RecordHeader;
