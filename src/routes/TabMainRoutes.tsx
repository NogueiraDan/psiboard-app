import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
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
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor:"#fff",
        tabBarStyle:{
          backgroundColor: "#02969c",
          height: 55,
        }
      }}
    >
      <Tab.Screen
  
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <Ionicons name="home" color="#fff" size={size} />;
            }

            return <Ionicons name="home-outline" color="#fff" size={size} />;
          },
          tabBarLabel: "Home",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Patients"
        component={Patients}
        options={{
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={24} color="#fff" />;
            }

            return <Ionicons name="person-outline" size={24} color="#fff" />;
          },
          tabBarLabel: "Pacientes",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Schedules"
        component={Schedules}
        options={{
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <Ionicons name="calendar" color="#fff" size={size} />;
            }

            return (
              <Ionicons name="calendar-outline" color="#fff" size={size} />
            );
          },
          tabBarLabel: "Agendamentos",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
