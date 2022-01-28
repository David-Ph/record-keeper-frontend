import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProfileMenu from "./ProfileMenu";
import ProfileForm from "./ProfileForm";

import AuthContext from "../../context/auth-context";
import { dropdownActions } from "../../store/profile/profiledropdown-slice";

function ProfileNav() {
  const AuthCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const dropdownIsVisible = useSelector(
    (state) => state.profileDropdown.showDropdown
  );
  const [showProfile, setShowProfile] = useState(false);

  const onClickHandler = (event) => {
    const isNavDropdown = event.target.classList.contains("navDropdown");
    if (isNavDropdown) return;
    dispatch(dropdownActions.clickHandler(isNavDropdown));
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
        className="rounded-full p-2 flex justify-center items-center hover:cursor-pointer hover:bg-secondary hover:text-white navDropdown"
        onClick={onClickHandler}
      >
        <img
          className="w-12 mr-3 rounded-full navDropdown"
          src={AuthCtx.user?.avatar}
          alt=""
        />
        {AuthCtx.user?.username}'s Adventure
      </div>

      <div
        className={`font-sans absolute md:ml-16 md:mt-32 mt-10 dropdown-menu ${
          dropdownIsVisible ? "dropdown-active" : ""
        }`}
      >
        <ProfileMenu onShowProfile={onShowProfile} open={dropdownIsVisible} />
      </div>
      {showProfile && <ProfileForm onHideProfile={onHideProfile} />}
    </div>
  );
}

export default ProfileNav;
