import { useState } from "react";
import { Text, View, Button, Alert, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();
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
    <View className="bg-slate-200 flex-1 justify-center items-center">
      <Text className="text-3xl">SignIn Screen</Text>
      <Button
        title="Ir para Login"
        onPress={() => navigation.navigate("SignUp")}
      />
      <TextInput placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
}
