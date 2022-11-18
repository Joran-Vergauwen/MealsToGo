import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

const firebaseConfig = {
  apiKey: "AIzaSyCJDH4g7OTOWg9jyr7eFmUMgnoPJBbuieA",
  authDomain: "mealstogo-5dbdd.firebaseapp.com",
  projectId: "mealstogo-5dbdd",
  storageBucket: "mealstogo-5dbdd.appspot.com",
  messagingSenderId: "4298239448",
  appId: "1:4298239448:web:e0108ba33616a75caf56ad",
};

// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const auth = getAuth();
  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "joran.vergauwen@gmail.com", "test123")
        .then((user) => {
          console.log(user);
          setIsAuthenticated(true);
          console.log(isAuthenticated);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  });

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
