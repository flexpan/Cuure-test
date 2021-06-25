import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import SearchPage from "./screens/SearchPage";
import RootStackScreen from "./screens/RootStackScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: styles.container,
          labelStyle: {
            fontSize: 16,
          },
        }}
      >
        <Tab.Screen name="Home" component={SearchPage} />
        <Tab.Screen name="Login" component={RootStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262B3A",
    paddingBottom: 15,
    fontSize: 20,
  },
});
