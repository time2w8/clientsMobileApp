import React from "react";
import { Main } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const PublicStack = () => {
    return (
        <Stack.Navigator initialRouteName="main">
            <Stack.Screen name="main" component={Main} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}