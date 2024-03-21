import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "../screens/Dashboard";
import Patients from "../screens/Patients";
import Schedules from "../screens/Schedules";

export default function TabMainRoutes() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Patients" component={Patients} />
      <Tab.Screen name="Schedules" component={Schedules} />
    </Tab.Navigator>
  );
}
