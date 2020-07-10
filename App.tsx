import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ReachoutNavbar from "./src/components/ReachoutNavbar";
import UserCard from "./src/components/UserCard";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <div className="app">
        <View style={{ flex: 1 }}>
          <ReachoutNavbar />
          <UserCard />
        </View>
      </div>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
