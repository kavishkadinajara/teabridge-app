import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { supabase } from "@/utils/supabase";
import { AppState, AppStateStatus } from "react-native";
import React, { useEffect } from "react";

const AuthLayout: React.FC = () => {
  useEffect(() => {
    const handleAppStateChange = (state: AppStateStatus) => {
      if (state === "active") {
        supabase.auth.startAutoRefresh();
      } else {
        supabase.auth.stopAutoRefresh();
      }
    };

    const subscription = AppState.addEventListener("change", handleAppStateChange);

    return () => {
      subscription.remove(); // Cleanup the event listener when the component unmounts
    };
  }, []);

  return (
    <>
      <Stack>
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;
