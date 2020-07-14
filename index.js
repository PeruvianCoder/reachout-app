import * as React from "@babel/react";
import * as ReactDOM from "react-dom";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./App";

AppRegistry.expo(appName, () => App);
