import "./App.css";
import React, { useContext } from "react";
import Router from "./router/Router";
import ProfileDropdownContext from "./context/profileDropdown-context";

function App() {
  const DropdownContext = useContext(ProfileDropdownContext);

  const onClickHandler = (event) => {
    DropdownContext.click(event.target);
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
