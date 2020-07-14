import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackActions } from "@react-navigation/native";
import Feed from "../components/Feed";
import UserInterests from "../components/UserInterests";
import UserProfile from "../components/UserProfile";
import Menu from "./Menu";
import { Icon } from "../assets/constants/Icon";
import { Images, materialTheme } from "../assets/constants/";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Feed} />
      <Stack.Screen name="Menu" component={MenuStack} />
    </Stack.Navigator>
  );
};

const InterestsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Interests" component={UserInterests} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={UserProfile} />
    </Stack.Navigator>
  );
};

const MenuStack = () => {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <Menu {...props} profile={UserProfile} />}
    >
      <Drawer.Screen
        name="Home"
        component={Feed}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="home-icon"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Interests"
        component={UserInterests}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="interests-icon"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={UserProfile}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="profile-icon"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
