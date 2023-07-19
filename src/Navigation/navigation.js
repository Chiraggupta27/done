import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding3 from "../screens/Onboard3/onBoarding3";
import HomeScreen from "../screens/homeScreen/homeScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
         
          <Stack.Screen name="Screen2" component ={OnBoarding3} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name="Home" component ={HomeScreen} options={{headerShown: false}}></Stack.Screen>   
        </Stack.Navigator>
      </NavigationContainer>
    );
}
export default Navigation;