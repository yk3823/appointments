import React from "react";
// import AccountScreen from "./app/screens/AccountScreen";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import ListingEditScreen from "./app/screens/ListingEditScreen";
// import ListingsScreen from "./app/screens/ListingsScreen";
// import LoginScreen from "./app/screens/LoginScreen";
// import MessagesScreen from "./app/screens/MessagesScreen";
// import RegisterScreen from "./app/screens/RegisterScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return <GestureHandlerRootView style={{ flex: 1 }}><WelcomeScreen /></GestureHandlerRootView>;
}
