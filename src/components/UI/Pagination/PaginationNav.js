import React from "react";

function PaginationNav(props) {
  return (
    <nav
      className="relative z-0 inline-flex flex-wrap rounded-md shadow-sm -space-x-px"
      aria-label="Pagination"
    >
      {props.children}
    </nav>
  );
}

export default PaginationNav;
