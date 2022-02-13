import React from "react";

import Title from "../UI/Typography/Title";
import LinkerSecondary from "../UI/Linker/LinkerSecondary";

function JournalInfo({ journals }) {
  
  return (
    <section className="flex flex-wrap flex-row py-4 justify-center md:justify-around items-center gap-5">
      {journals.length && journals.map((journal) => {
        return (
          <LinkerSecondary>
            <Title>{journal.title}</Title>
            <p>{journal.excerpt}</p>
          </LinkerSecondary>
        );
      })}
    </section>
  );
}

export default JournalInfo;
