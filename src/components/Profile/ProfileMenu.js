import React, { useContext, Fragment } from "react";

import AuthContext from "../../context/auth-context";

import Card from "../UI/Card/Card";

function ProfileMenu(props) {
  const AuthCtx = useContext(AuthContext);
  const onEditProfile = () => {
    props.onShowProfile();
  };

  const onLogout = () => {
    AuthCtx.logout();
  };

  return (
    <div className="bg-primary text-base w-72 rounded-md border border-black">
      {props.open && (
        <Fragment>
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
        </Fragment>
      )}
    </div>
  );
}

export default ProfileMenu;
