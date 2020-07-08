import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ReachoutNavbar from "./src/components/ReachoutNavbar";
import UserCard from "./src/components/UserCard";

export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );

  return (
    <div className="app">
      <View style={{ flex: 1 }}>
        <ReachoutNavbar />
        <UserCard />
      </View>
    </div>
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
