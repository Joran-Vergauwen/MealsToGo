import React, { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((userCredential) => {
        setIsLoading(false);
        setUser(userCredential.user);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

// const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const auth = getAuth();
//   useEffect(() => {
//     setTimeout(() => {
//       signInWithEmailAndPassword(auth, "joran.vergauwen@gmail.com", "test123")
//         .then((userCredential) => {
//           setIsAuthenticated(true);
//           const user = userCredential.user;
//           console.log(user);
//         })
//         .catch((e) => {
//           setIsAuthenticated(false);
//           console.log(e);
//         });
//     }, 2000);
//   }, []);
