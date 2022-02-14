import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import PaginationNav from "../UI/Pagination/PaginationNav";
import PaginationItem from "../UI/Pagination/PaginationItem";

function JournalFooter(props) {
  const location = useLocation();
  const history = useHistory();
  const pages = Math.ceil(props.count / 15);
  const paginationItems = [];

  for (let i = 1; i <= pages; i++) {
    paginationItems.push(i);
  }

  const onPageClick = (event) => {
    const page = event.target.textContent;
    const path = location.pathname;
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get("search");

    let params = `?page=${page}`;
    
    if (search) params += `&search=${search}`;

    history.push(`${path}${params}`);
  };

  return (
    <div className="bg-primary py-3 flex flex-wrap items-center justify-between border-t border-gray-400 sm:px-6 max-w-full">
      <PaginationNav>
        {paginationItems.map((item) => {
          return (
            <PaginationItem key={item} onClick={onPageClick}>
              {item}
            </PaginationItem>
          );
        })}
      </PaginationNav>
    </div>
  );
}

export default JournalFooter;
