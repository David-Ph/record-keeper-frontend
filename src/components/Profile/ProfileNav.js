import React, { useContext, useState } from "react";

import ProfileMenu from "./ProfileMenu";
import ProfileForm from "./ProfileForm";

import AuthContext from "../../context/auth-context";
import ProfileDropdownContext from "../../context/profileDropdown-context";

function ProfileNav() {
  const AuthCtx = useContext(AuthContext);
  const dropdownContext = useContext(ProfileDropdownContext);
  const [showProfile, setShowProfile] = useState(false);

  const onClickHandler = () => {
    dropdownContext.click();
  };

  const onShowProfile = () => {
    setShowProfile(true);
  };

  const onHideProfile = () => {
    setShowProfile(false);
  };

  return (
    <div className="md:-order-last py-2 flex flex-col md:flex-row items-center">
      <div
        className="rounded-full p-2 flex justify-center items-center hover:cursor-pointer hover:bg-secondary hover:text-white "
        onClick={onClickHandler}
      >
        <img
          className="w-12 mr-3 rounded-full"
          src={AuthCtx.user.avatar}
          alt=""
        />
        {AuthCtx.user?.username}'s Adventure
      </div>

      <div
        className={`font-sans absolute md:ml-16 md:mt-32 mt-10 dropdown-menu ${
          dropdownContext.showDropdown ? "dropdown-active" : ""
        }`}
      >
        <ProfileMenu
          onShowProfile={onShowProfile}
          open={dropdownContext.showDropdown}
        />
      </div>
      {showProfile && <ProfileForm onHideProfile={onHideProfile} />}
    </div>
  );
}

export default ProfileNav;
