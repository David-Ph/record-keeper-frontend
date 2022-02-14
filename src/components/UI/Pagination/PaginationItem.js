import React from "react";

function PaginationItem(props) {
  return (
    <div
      onClick={props.onClick}
      aria-current="page"
      className="bg-primary border-tertiary hover:bg-secondary hover:text-white items-center px-4 py-2 border text-sm font-medium hover:cursor-pointer"
    >
      {props.children}
    </div>
  );
}

export default PaginationItem;
