import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StackAuthRoutes from "./src/routes/StackAuthRoutes";
import TabMainRoutes from "./src/routes/TabMainRoutes";

const queryClient = new QueryClient();

export default function App() {
  const Stack = createStackNavigator();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="StackAuthRoutes"
            options={{
              headerShown: false,
            }}
            component={StackAuthRoutes}
          />
          <Stack.Screen
            name="TabMainRoutes"
            options={{
              headerShown: false,
            }}
            component={TabMainRoutes}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
