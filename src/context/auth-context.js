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

  console.log(`currentTime is ${currentTime}`);
  console.log(`expTIme is ${expTime}`);

  return expTime - currentTime;
}

function retrieveToken() {
  const storedToken = localStorage.getItem(LOCALSTORAGE.TOKEN);
  const storedExpiration = localStorage.getItem(LOCALSTORAGE.EXPIRATION_TIME);

  const remainingTime = calculateRemainingTime(storedExpiration);

  if (remainingTime <= 0) {
    localStorage.removeItem(LOCALSTORAGE.TOKEN);
    localStorage.removeItem(LOCALSTORAGE.USER);
    localStorage.removeItem(LOCALSTORAGE.EXPIRATION_TIME);
    return null;
  }

  return {
    token: storedToken,
    duration: storedExpiration,
  };
}

export const AuthContextProvider = (props) => {
  const tokenData = retrieveToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState(null);
  const userIsLoggedIn = !!token; // converts falsy/truthy values into boolean

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem(LOCALSTORAGE.TOKEN);
    localStorage.removeItem(LOCALSTORAGE.USER);
    localStorage.removeItem(LOCALSTORAGE.EXPIRATION_TIME);

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const initialTime = new Date(
    new Date().getTime() + AUTH_CONFIG.TOKEN_DURATION * 1000
  );

  const loginHandler = (token, user, expirationTime = initialTime) => {
    setToken(token);
    setUser(user);
    localStorage.setItem(LOCALSTORAGE.TOKEN, token);
    localStorage.setItem(LOCALSTORAGE.USER, user);
    localStorage.setItem(LOCALSTORAGE.EXPIRATION_TIME, expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
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
