import React from "react";

function Title(props) {
  return <h1 className="font-semibold md:text-2xl text-xl">{props.children}</h1>;
}

export default Title;
