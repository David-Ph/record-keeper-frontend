import React, { useState, useEffect, useCallback } from "react";
import { AUTH_CONFIG } from "../config/Auth";

let logoutTimer;

const LOCALSTORAGE = {
  TOKEN: "token",
  USER: "currentUser",
  EXPIRATION_TIME: "expirationTime",
};

const AuthContext = React.createContext({
  token: "",
  user: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

function calculateRemainingTime(expirationTime) {
  const currentTime = new Date().getTime();
  const expTime = new Date(expirationTime).getTime();

  return expTime - currentTime;
}

function retrieveToken() {
  const storedToken = localStorage.getItem(LOCALSTORAGE.TOKEN);
  const storedExpiration = localStorage.getItem(LOCALSTORAGE.EXPIRATION_TIME);
  const storedUser = localStorage.getItem(LOCALSTORAGE.USER);

  const remainingTime = calculateRemainingTime(storedExpiration);

  if (remainingTime <= 0) {
    localStorage.removeItem(LOCALSTORAGE.TOKEN);
    localStorage.removeItem(LOCALSTORAGE.USER);
    localStorage.removeItem(LOCALSTORAGE.EXPIRATION_TIME);
    return null;
  }

  return {
    token: storedToken,
    user: storedUser,
    duration: storedExpiration,
  };
}

export const AuthContextProvider = (props) => {
  const tokenData = retrieveToken();

  let initialToken;
  let initialUser;
  if (tokenData) {
    initialToken = tokenData.token;
    initialUser = JSON.parse(tokenData.user);
  }

  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState(initialUser);
  const userIsLoggedIn = !!token; // converts falsy/truthy values into boolean

  const logoutHandler = useCallback(() => {
    localStorage.removeItem(LOCALSTORAGE.TOKEN);
    localStorage.removeItem(LOCALSTORAGE.USER);
    localStorage.removeItem(LOCALSTORAGE.EXPIRATION_TIME);
    setToken(null);

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, user) => {
    const initialTime =
      new Date().getTime() + AUTH_CONFIG.TOKEN_DURATION * 1000;

    setToken(token);
    setUser(user);

    const stringifiedUser = JSON.stringify(user);

    localStorage.setItem(LOCALSTORAGE.TOKEN, token);
    localStorage.setItem(LOCALSTORAGE.USER, stringifiedUser);
    localStorage.setItem(LOCALSTORAGE.EXPIRATION_TIME, initialTime);

    logoutTimer = setTimeout(logoutHandler, initialTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    user: user,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
