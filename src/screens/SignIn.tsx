import { useState } from "react";
import {
  Text,
  View,
  Alert,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLogin } from "../hooks/useLogin";
import { useUser } from "../context/UserContext";

export default function SignIn() {
  const navigation = useNavigation();
  const { login } = useLogin();
  const { updateUser } = useUser();
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");

  async function handleSubmit() {
    if (!password && !email) {
      alert("Digite algo para poder seguir!");
      return;
    }

    try {
      const response = await login({ email, password });
      await updateUser(response);
      console.log("Login successful:", response);
      Alert.alert("Sucesso");
      setEmail("");
      setPassword("");

      // Reset the navigation stack and navigate to the "TabMainRoutes" screen.
      navigation.reset({
        index: 0,
        routes: [{ name: "TabMainRoutes" }],
      });
      navigation.navigate("TabMainRoutes");
    } catch (error) {
      console.error("Login failed:", error);
      Alert.alert(
        "Erro: " + error,
        "Não foi possível realizar o login. Tente novamente."
      );
    }
  }
  return (
    <SafeAreaView className="flex-1 justify-center gap-5 items-center bg-[#fefefe] text-white">
      <Image
        source={require("../../assets/custome.png")}
        style={{ width: 200, height: 200 }}
      />
      <Text className="my-5 text-center text-3xl font-bold tracking-tight text-black">
        Entre na sua conta
      </Text>
      <TextInput
        placeholder="Digite seu email..."
        value={email}
        onChangeText={setEmail}
        className="h-[50px] w-4/5 border-2 border-[#02969c] rounded px-3 placeholder:italic placeholder:text-black"
      />

      <TextInput
        placeholder="Digite sua senha..."
        value={password}
        onChangeText={setPassword}
        className="h-[50px] w-4/5 border-2 border-[#02969c] rounded px-3 placeholder:italic placeholder:text-black"
      />

      <View className="mt-10 items-center w-full gap-5">
        <TouchableOpacity
          onPress={handleSubmit}
          className="flex w-[50%] items-center h-[50px] justify-center rounded-md bg-[#02969c] px-3 py-1.5 text-sm font-semibold leading-6 text-[#fff] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <Text className="text-white text-xl text-center items-center justify-center flex">
            Entrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text className="text-black text-base">
            Não tem conta? Cadastre-se
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("OnBoarding")}>
          <Text className="text-black text-base">Voltar para home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
