import React from "react";
import { Link } from "react-router-dom";

import { Routes } from "../../config/Routes";

import logo from "../../assets/Logo/logo-transparent.png";

function Logo() {
  return (
    <div className="flex items-center">
      <Link
        to={Routes.DASHBOARD_MAIN}
        className="md:text-3xl text-xl font-handwritten mr-3"
      >
        Record Keeper
      </Link>
      <img src={logo} alt="" className="w-12" />
    </div>
  );
}

export default Logo;
