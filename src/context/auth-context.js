import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const LOCALSTORAGE = {
  TOKEN: "token",
  EXPIRATION_TIME: "expirationTime",
};

const AuthContext = React.createContext({
  token: "",
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

  const remainingTime = calculateRemainingTime(storedExpiration);

  if (remainingTime <= 0) {
    localStorage.removeItem(LOCALSTORAGE.TOKEN);
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
    initialToken = tokenData.data;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token; // converts falsy/truthy values into boolean

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem(LOCALSTORAGE.TOKEN);
    localStorage.removeItem(LOCALSTORAGE.EXPIRATION_TIME);

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem(LOCALSTORAGE.TOKEN, token);
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
