import React, { useContext } from "react";

import AuthContext from "../../context/auth-context";

import Card from "../UI/Card/Card";

function ProfileMenu() {
  const AuthCtx = useContext(AuthContext);
  const onEditProfile = () => {};

  const onLogout = () => {
    AuthCtx.logout();
  };

  return (
    <div className="bg-primary text-base w-72 rounded-md border border-black">
      <div
        onClick={onEditProfile}
        className="hover:bg-secondary hover:cursor-pointer hover:text-white rounded-md"
      >
        <Card>
          <p>Edit Profile</p>
        </Card>
      </div>
      <div
        onClick={onLogout}
        className="hover:bg-secondary hover:cursor-pointer hover:text-white rounded-md"
      >
        <Card>
          <p>Logout</p>
        </Card>
      </div>
    </div>
  );
}

export default ProfileMenu;
