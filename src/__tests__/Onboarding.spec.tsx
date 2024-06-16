import { render, fireEvent } from "@testing-library/react-native";
import Onboarding from "./../screens/Onboarding";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "../context/UserContext";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

// Mockando o useNavigation do NavigationContainer com Jest
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  const naviagtionMock = jest.fn();
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: naviagtionMock,
    }),
  };
});

// Mockando AsyncStorage (ou qualquer outro método de armazenamento que você esteja usando)
jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(() => Promise.resolve()),
  setItem: jest.fn(() => Promise.resolve()),
}));

describe("Onboarding Suit Tests", () => {
  const queryClient = new QueryClient();
  it("renders correctly", () => {
    render(
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Onboarding />
          </NavigationContainer>
        </QueryClientProvider>
      </UserProvider>
    );
  });

  it("should navigate to SignIn screen when Login Button is pressed", () => {
    const { getByTestId } = render(
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Onboarding />
          </NavigationContainer>
        </QueryClientProvider>
      </UserProvider>
    );

    const loginButton = getByTestId("login-button");
    fireEvent.press(loginButton);
    expect(useNavigation().navigate).toHaveBeenCalledWith("SignIn");
  });

  it("should navigate to SignUp screen when Login Button is pressed", () => {
    const { getByTestId } = render(
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Onboarding />
          </NavigationContainer>
        </QueryClientProvider>
      </UserProvider>
    );

    const loginButton = getByTestId("sign-up-button");
    fireEvent.press(loginButton);
    expect(useNavigation().navigate).toHaveBeenCalledWith("SignUp");
  });
});
