import "./App.css";
import React from "react";
import Router from "./router/Router";
import { useDispatch } from "react-redux";

import { dropdownActions } from "./store/profile/profiledropdown-slice";

function App() {
  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    const isNavDropdown = event.target.classList.contains("navDropdown");
    dispatch(dropdownActions.clickHandler(isNavDropdown));
  };

  return (
    <div
      onClick={onClickHandler}
      className="bg-logo-bg min-h-screen h-full bg-cover bg-center bg-no-repeat font-sans"
    >
      <Router />
    </div>
  );
}

export default App;
