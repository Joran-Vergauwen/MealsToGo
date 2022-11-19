import React, { useState, createContext } from "react";
import {
  loginRequest,
  signOutRequest,
  signupRequest,
} from "./authentication.service";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthenticationContext = createContext();
const auth = getAuth();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      console.log("State changed");
      setUser(usr);
      setIsLoading(false);
    } else {
      console.log("State not changed");
      // setUser(null); // todo: bugfix
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((userCredential) => {
        console.log("logging in");
        setIsLoading(false);
        setUser(userCredential.user);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    signupRequest(email, password)
      .then((userCredential) => {
        setIsLoading(false);
        setUser(userCredential.user);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    console.log("signing out");
    setUser(null);
    signOutRequest();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
