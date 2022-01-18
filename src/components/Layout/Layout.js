import React from "react";

import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <section className="max-w-screen-lg mx-auto p-4 box-content">
      <MainNavigation />
      <main>{props.children}</main>
    </section>
  );
}

export default Layout;
