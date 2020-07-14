import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ReachoutNavbar from "./src/components/ReachoutNavbar";
import UserCard from "./src/components/UserCard";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import AppStack from "./src/navigation/Routing";

const [isLoading, setIsLoading] = useState<boolean>(true);

export default function App() {
  if (!isLoading) {
    return (
      <NavigationContainer>
        <div className="app">
          <View style={{ flex: 1 }}>
            <AppStack />
          </View>
        </div>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        //startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      ></AppLoading>
    );
  }
}

// const _loadResourcesAsync = async () => {
//   return Promise.all([...cacheImages(assetImages)]);
// };

const _handleLoadingError = (error) => {
  console.error(error);
};

const _handleFinishLoading = () => {
  setIsLoading(false);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
