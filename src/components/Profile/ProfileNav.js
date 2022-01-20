import React, { useContext, useState } from "react";

import ProfileMenu from "./ProfileMenu";
import ProfileForm from "./ProfileForm";

import AuthContext from "../../context/auth-context";

function ProfileNav() {
  const AuthCtx = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const onClickHandler = () => {
    setOpen(!open);
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
        className={`font-sans absolute top-24 left-48 dropdown-menu ${
          open ? "dropdown-active" : ""
        }`}
      >
        <ProfileMenu onShowProfile={onShowProfile} open={open} />
      </div>
      {showProfile && <ProfileForm onHideProfile={onHideProfile} />}
    </div>
  );
}

export default ProfileNav;
