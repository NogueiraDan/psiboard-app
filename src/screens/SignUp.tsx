import { useState } from "react";
import {
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootParamList = {
  SignIn: undefined;
  SignUp: undefined;
  TabMainRoutes: undefined;
};

type SignInNavigationProp = StackNavigationProp<RootParamList, "SignIn">;
type SignInRouteProp = RouteProp<RootParamList, "SignIn">;

export default function SignUp({
  navigation,
  route,
}: {
  navigation: SignInNavigationProp;
  route: SignInRouteProp;
}) {
  const nav = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !password) {
      alert("Digite algo");
      return;
    }
    Alert.alert("Sucesso");
    setEmail("");
    setEmail("");
    setPassword("");
    navigation.reset({
      index: 0,
      routes: [{ name: "TabMainRoutes" }],
    });
  };
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
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
        className="h-[50px] w-4/5 border-2 border-[#02969c] rounded px-3 placeholder:italic placeholder:text-black"
      />
      <TextInput
        placeholder="Digite seu email..."
        value={email}
        onChangeText={setEmail}
        className="h-[50px] w-4/5 border-2 border-[#02969c] rounded px-3 placeholder:italic placeholder:text-black"
      />
      <TextInput
        placeholder="Digite seu email..."
        value={password}
        onChangeText={setPassword}
        className="h-[50px] w-4/5 border-2 border-[#02969c] rounded px-3 placeholder:italic placeholder:text-black"
      />

      <View className="mt-10 items-center w-full gap-5">
        <TouchableOpacity
          onPress={handleSubmit} 
          className="flex w-[50%] items-center h-[50px] justify-center rounded-md bg-[#02969c] px-3 py-1.5 text-sm font-semibold leading-6 text-[#fff] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
          <Text className="text-white text-xl text-center items-center justify-center flex">
            Cadastrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text className="text-black text-base">Já tem conta? Faça login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("OnBoarding")}>
          <Text className="text-black text-base">Voltar para home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
