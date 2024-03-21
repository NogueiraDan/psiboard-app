import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "../screens/Onboarding";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

export default function StackAuthRoutes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
