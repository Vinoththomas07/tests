import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Task2a from "./../assignment/task2a";
import Task2b from "./../assignment/task2b";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
  
          if (route.name === 'Timer') {
            iconName = 'timer'
          } else if (route.name === 'Crypto List') {
            iconName = 'featured-play-list';
          } 
  
          return <MaterialIcons name={iconName} size={16} color={color} />;
        },
      })}
        tabBarOptions={{
          activeTintColor: '#4B4BC9',
          inactiveTintColor: '#C3C3EE',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#fff',
          style: { height: 50 },
          labelStyle: {
            display: 'none'
          }
        }}>
        <Tab.Screen name="Timer" component={Task2a} />
        <Tab.Screen name="Crypto List" component={Task2b} />
      </Tab.Navigator>
  );
}
