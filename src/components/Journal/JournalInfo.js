import React from "react";
import { useSelector } from "react-redux";

import { HTTP_STATUS } from "../../hooks/useHttp";

import Title from "../UI/Typography/Title";
import JournalItem from "./JournalItem";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function JournalInfo({ journals }) {
  const { journalStatus } = useSelector((state) => state.httpUI);

  const isLoading = journalStatus === HTTP_STATUS.PENDING;
  const loadingSpinner = (
    <div className="flex md:ml-2 md:w-2/3 justify-center items-center p-2">
      <LoadingSpinner />
    </div>
  );

  return (
    <section className="flex flex-wrap flex-row py-4 justify-center md:justify-around items-center gap-5">
      {isLoading && loadingSpinner}
      {!isLoading && !journals.length && <Title>No Journal Entries</Title>}
      {!isLoading &&
        journals.length &&
        journals.map((journal) => {
          return (
            <JournalItem
              key={journal._id}
              id={journal._id}
              title={journal.title}
              body={journal.body}
            >
              <Title>{journal.title}</Title>
              <p>{journal.excerpt}</p>
            </JournalItem>
          );
        })}
    </section>
  );
}

export default JournalInfo;
