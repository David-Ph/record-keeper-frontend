import React, { useContext, useState } from "react";

import ProfileMenu from "./ProfileMenu";

import AuthContext from "../../context/auth-context";

function ProfileNav() {
  const AuthCtx = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const onClickHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="md:-order-last py-2 flex flex-col md:flex-row items-center">
      <div
        className="rounded-full p-2 flex justify-center items-center hover:cursor-pointer hover:bg-yellow-500 "
        onClick={onClickHandler}
      >
        <img
          className="w-12 mr-3 rounded-full"
          src="https://res.cloudinary.com/teepublic/image/private/s--l3gUH43D--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1452762067/production/designs/394667_1.jpg"
          alt=""
        />
        {AuthCtx.user?.username}'s Adventure
      </div>

      <div
        className={`font-sans absolute top-24 left-48 dropdown-menu ${
          open ? "dropdown-active" : ""
        }`}
      >
        <ProfileMenu />
      </div>
    </div>
  );
}

export default ProfileNav;
