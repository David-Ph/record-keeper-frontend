import React from "react";

function Title(props) {
  return <h1 className="font-semibold md:text-2xl text-xl flex justify-center items-center">{props.children}</h1>;
}

export default Title;
