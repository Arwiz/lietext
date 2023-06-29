import React from "react";
import { Navigation } from "./src/Navigation/Navigation";
import { Text, View } from "react-native";
import { AuthProvider } from "./src/context/AuthContext";
import { Provider } from 'react-redux'
import { store } from './src/redux/store';



export default function App(){

  return (
      <Provider store={store}>
        <AuthProvider>
        <Navigation/>
      </AuthProvider>
    </Provider>
  );
}