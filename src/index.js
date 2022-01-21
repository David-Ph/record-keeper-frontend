import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/auth-context";
import { ProfiledropdownProvider } from "./context/profileDropdown-context";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProfiledropdownProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProfiledropdownProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
