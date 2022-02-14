import React from "react";

function CardSecondary(props) {
  return (
    <div
      onClick={props.onClick}
      className="p-2 rounded-md w-full max-w-[280px] shadow-lg border border-slate-400  flex flex-col hover:scale-110 hover:cursor-pointer transition-all duration-200"
    >
      {props.children}
    </div>
  );
}

export default CardSecondary;
