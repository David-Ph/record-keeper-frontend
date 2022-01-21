import React from "react";

import ProfileNav from "../Profile/ProfileNav";

import Logo from "../Logo/Logo";
import SectionBlock from "../UI/SectionBlock/SectionBlock";

function MainNavigation() {
  return (
    <header>
      <SectionBlock>
        <div className="flex flex-col md:text-3xl text-xl font-handwritten items-center justify-between md:flex-row">
          <Logo />
          <ProfileNav />
        </div>
      </SectionBlock>
    </header>
  );
}

export default MainNavigation;
