import React, { useState } from "react";

const ProfileDropdownContext = React.createContext({
  showDropdown: false,
  click: () => {},
});

export default ProfileDropdownContext;

export const ProfiledropdownProvider = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const clickHandler = (target) => {
    if (target.classList.contains("navDropdown")) {
      setShowDropdown(!showDropdown);
    } else {
      setShowDropdown(false);
    }
  };

  const contextValue = {
    showDropdown: showDropdown,
    click: clickHandler,
  };

  return (
    <ProfileDropdownContext.Provider value={contextValue}>
      {props.children}
    </ProfileDropdownContext.Provider>
  );
};
