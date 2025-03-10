import { DocumentData } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar, useColorScheme } from "react-native";

import { UserDetailContext } from "@/config/UserDetailContext";


export default function RootLayout() {

  const theme = useColorScheme();
  const router = useRouter();
  
  // Explicitly type userDetail as DocumentData or null
  const [userDetail, setUserDetail] = useState<DocumentData | null>(null);



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {/* <StatusBar hidden /> */}
        <StatusBar
          hidden={false}
          barStyle={theme === "dark" ? "light-content" : "dark-content"}
          backgroundColor={theme === "dark" ? "#000" : "#FFF"}
        />
        <Stack screenOptions={{ headerShown: false }}>
          {/* Your routes or screens would go here */}
        </Stack>
      </UserDetailContext.Provider>
    </GestureHandlerRootView>
  );
}
