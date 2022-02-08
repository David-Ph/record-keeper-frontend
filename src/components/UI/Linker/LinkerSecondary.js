import React from "react";
import { Link } from "react-router-dom";

function LinkerSecondary(props) {
  return (
    <Link to={props.target}>
      <div className="p-2 rounded-md w-full max-w-[280px] shadow-lg border border-slate-400  flex flex-col hover:scale-110 hover:cursor-pointer transition-all duration-200">
        {props.children}
      </div>
    </Link>
  );
}

export default LinkerSecondary;
