import React from "react";
import { Link } from "react-router-dom";

function Linker(props) {
  const extraClasses = props.extraClasses || "";

  return (
    <Link
      className={`w-full hover:cursor-pointer flex justify-center items-center hover:bg-secondary hover:text-white ${extraClasses}`}
      to={props.target}
    >
      {props.children}
    </Link>
  );
}

export default Linker;
