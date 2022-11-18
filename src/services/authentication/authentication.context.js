// import React, { useState, createContext } from "react";

// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { loginRequest } from "./authentication.service";

// const firebaseConfig = {
//   apiKey: "AIzaSyCJDH4g7OTOWg9jyr7eFmUMgnoPJBbuieA",
//   authDomain: "mealstogo-5dbdd.firebaseapp.com",
//   projectId: "mealstogo-5dbdd",
//   storageBucket: "mealstogo-5dbdd.appspot.com",
//   messagingSenderId: "4298239448",
//   appId: "1:4298239448:web:e0108ba33616a75caf56ad",
// };

// const app = initializeApp(firebaseConfig);

// export const AuthenticationContext = createContext();

// export const AuthenticationContextProvider = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   const onLogin = (email, password) => {
//     setIsLoading(true);
//     loginRequest(email, password)
//       .then((u) => {
//         setUser(u);
//         setIsLoading(false);
//       })
//       .catch((e) => {
//         setIsLoading(false);
//         setError(e);
//       });
//   };
//   return (
//     <AuthenticationContext.Provider
//       value={{
//         user,
//         isLoading,
//         error,
//         onLogin,
//       }}
//     >
//       {children}
//     </AuthenticationContext.Provider>
//   );
// };
