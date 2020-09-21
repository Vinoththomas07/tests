import React, { useEffect } from "react";
import { Root } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Task1 from "./assignment/task1";
import TabsNavigator from "./TabNavigation/navigator";
import * as Font from 'expo-font';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        Roboto: require('./assets/fonts/Roboto.ttf'),
        Roboto_medium: require('./assets/fonts/Roboto-Medium.ttf'),
      }))();
  }, []);

  return (
    <Root>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Task1" component={Task1} />
          <Stack.Screen name="TabsNavigator" component={TabsNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Root>
  );
}