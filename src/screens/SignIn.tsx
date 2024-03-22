import { useState } from "react";
import { Text, View, Button, Alert, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  const handleSubmit = () => {
    // if (!senha && !email) {
    //   alert("Digite algo");
    //   return;
    // }
    Alert.alert("Sucesso");
    setEmail("");
    setSenha("");
    navigation.reset({
      index: 0,
      routes: [{ name: "TabMainRoutes" }],
    });
    //navigation.navigate("TabMainRoutes");
  };
  return (
    <View className="flex-1 justify-center items-cente bg-slate-200">
      <Text className="text-3xl">SignIn Screen</Text>
      <Button
        title="Ir para Cadastro"
        onPress={() => navigation.navigate("SignUp")}
      />
      <TextInput
        placeholder="Email*"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha*"
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Fazer Login" onPress={handleSubmit} />
    </View>
  );
}
