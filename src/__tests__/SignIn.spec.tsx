import { render } from "@testing-library/react-native";
import SignIn from "./../screens/SignIn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "../context/UserContext";
import { NavigationContainer } from "@react-navigation/native";

describe("SignIn Suit Tests", () => {
  it("renders correctly", () => {
    const queryClient = new QueryClient();
    render(
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <SignIn />
          </NavigationContainer>
        </QueryClientProvider>
      </UserProvider>
    );
  });

});
