import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "./StartScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="subscribe" component={StartScreen} />
    <RootStack.Screen name="SignIn" component={SignInScreen} />
    <RootStack.Screen name="SignUp" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
