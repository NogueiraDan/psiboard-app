import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react-native";
import SignIn from "./../screens/SignIn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "../context/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { useLogin } from "../hooks/useLogin";

const mockLogin  = jest.fn().mockResolvedValueOnce({
  id: "123",
  name: "Daniel",
  email: "daniel@teste.com",
  access_token: "abc123",
});

jest.mock("../hooks/useLogin", () => ({
  useLogin: () => ({
    login: mockLogin,
  }),
}));

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(() => Promise.resolve()),
  setItem: jest.fn(() => Promise.resolve()),
}));

jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      navigate: jest.fn(),
      reset: jest.fn(),
    }),
  };
});

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

    expect(screen.getByTestId("input-email")).toBeDefined();
    expect(screen.getByTestId("input-password")).toBeDefined();
    expect(screen.getByTestId("button-login")).toBeDefined();
  });

  it("should handle successful login", async () => {
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
    await act(async () => {
      fireEvent.changeText(
        screen.getByTestId("input-email"),
        "daniel@teste.com"
      );
      fireEvent.changeText(screen.getByTestId("input-password"), "1234567890");
      fireEvent.press(screen.getByTestId("button-login"));
    });

    await waitFor(() => {
      expect(useLogin().login).toHaveBeenCalled();
      // expect( fireEvent.press(screen.getByTestId("button-login")));
    });
  });
});
