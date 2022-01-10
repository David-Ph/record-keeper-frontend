import React, { useRef } from "react";

import Textbox from "../UI/Textbox/Textbox";
import Input from "../UI/Input/Input";

function Login() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  return (
    <div>
      <Textbox>
        <h1 className="font-semibold text-2xl">Login</h1>
      </Textbox>
      <Textbox>
        <section>
          <form>
            <Input
              label="Email:"
              ref={emailInputRef}
              input={{
                id: "email",
                type: "email",
              }}
            />
            <Input
              label="Password:"
              ref={passwordInputRef}
              input={{
                id: "password",
                type: "password",
              }}
            />
            <Input
              label="Confirm Password:"
              ref={confirmPasswordInputRef}
              input={{
                id: "confirmPassword",
                type: "password",
              }}
            />
          </form>
        </section>
      </Textbox>
    </div>
  );
}

export default Login;
