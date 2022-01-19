import React from "react";

import Logo from "../Logo/Logo";
import Textbox from "../UI/TextBox/Textbox";

function MainNavigation() {
  return (
    <header>
      <Textbox>
        <div className="flex flex-col md:text-3xl text-xl font-handwritten  items-center justify-between md:flex-row">
          <Logo />
          <div className="md:-order-last py-2 flex flex-col md:flex-row items-center">
            <img
              className="w-12 mr-3 rounded-full"
              src="https://res.cloudinary.com/teepublic/image/private/s--l3gUH43D--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1452762067/production/designs/394667_1.jpg"
              alt=""
            />
            <p>Saltshakers's Adventure</p>
          </div>
        </div>
      </Textbox>
    </header>
  );
}

export default MainNavigation;
